 import { useState } from "react";
 import { format } from "date-fns";
 import { CalendarIcon, Loader2 } from "lucide-react";
 import { useForm } from "react-hook-form";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { z } from "zod";
 import { cn } from "@/lib/utils";
 import { Button } from "@/components/ui/button";
 import { Calendar } from "@/components/ui/calendar";
 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import {
   Popover,
   PopoverContent,
   PopoverTrigger,
 } from "@/components/ui/popover";
 import { supabase } from "@/integrations/supabase/client";
 import { toast } from "sonner";
 
 const formSchema = z.object({
   name: z.string().min(2, "Name must be at least 2 characters"),
   email: z.string().email("Please enter a valid email"),
   phone: z.string().min(10, "Please enter a valid phone number"),
   checkInDate: z.date({ required_error: "Please select a check-in date" }),
   message: z.string().optional(),
 });
 
 type FormData = z.infer<typeof formSchema>;
 
interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomType: string;
  roomPrice?: string;
  roomId?: string;
}

const BookingDialog = ({
  open,
  onOpenChange,
  roomType,
  roomPrice,
  roomId,
}: BookingDialogProps) => {
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const form = useForm<FormData>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       name: "",
       email: "",
       phone: "",
       message: "",
     },
   });
 
    const onSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      try {
        const { error } = await supabase.from("booking_inquiries").insert({
          room_id: roomId || null,
          name: data.name,
          email: data.email,
          phone: data.phone,
          check_in_date: format(data.checkInDate, "yyyy-MM-dd"),
          message: data.message || null,
        });
  
        if (error) throw error;

        // Send email notification
        supabase.functions.invoke("send-booking-email", {
          body: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            checkInDate: format(data.checkInDate, "PPP"),
            roomType,
            roomPrice,
            message: data.message,
          },
        }).catch((err) => console.error("Email notification failed:", err));
  
        toast.success("Inquiry submitted successfully! We'll contact you soon.");
        form.reset();
        onOpenChange(false);
      } catch (error) {
        console.error("Error submitting inquiry:", error);
        toast.error("Failed to submit inquiry. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="sm:max-w-[425px]">
         <DialogHeader>
            <DialogTitle className="font-serif">Book {roomType}</DialogTitle>
            <DialogDescription>
              {roomPrice ? `${roomPrice}/month - ` : ""}Fill in your details and we'll get back to you
              shortly.
            </DialogDescription>
         </DialogHeader>
 
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
             <FormField
               control={form.control}
               name="name"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Full Name</FormLabel>
                   <FormControl>
                     <Input placeholder="Your name" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Email</FormLabel>
                   <FormControl>
                     <Input placeholder="your@email.com" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Phone Number</FormLabel>
                   <FormControl>
                     <Input placeholder="+91 XXXXX XXXXX" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="checkInDate"
               render={({ field }) => (
                 <FormItem className="flex flex-col">
                   <FormLabel>Preferred Check-in Date</FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl>
                         <Button
                           variant="outline"
                           className={cn(
                             "w-full pl-3 text-left font-normal",
                             !field.value && "text-muted-foreground"
                           )}
                         >
                           {field.value ? (
                             format(field.value, "PPP")
                           ) : (
                             <span>Pick a date</span>
                           )}
                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                         </Button>
                       </FormControl>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0" align="start">
                       <Calendar
                         mode="single"
                         selected={field.value}
                         onSelect={field.onChange}
                         disabled={(date) => date < new Date()}
                         initialFocus
                         className={cn("p-3 pointer-events-auto")}
                       />
                     </PopoverContent>
                   </Popover>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Additional Message (Optional)</FormLabel>
                   <FormControl>
                     <Textarea
                       placeholder="Any special requirements..."
                       {...field}
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <Button
               type="submit"
               className="w-full cta-gradient"
               disabled={isSubmitting}
             >
               {isSubmitting ? (
                 <>
                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                   Submitting...
                 </>
               ) : (
                 "Submit Inquiry"
               )}
             </Button>
           </form>
         </Form>
       </DialogContent>
     </Dialog>
   );
 };
 
 export default BookingDialog;