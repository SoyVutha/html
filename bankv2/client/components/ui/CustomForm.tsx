import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface CustomFormProps {
    form: any,
    name: string,
    label: string,
    type: string

}
const CustomForm = ({form,name,label,type}:CustomFormProps) => {
  return (
<FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <div className="form-item">
             <FormLabel className="form-label" >
                {label}
             </FormLabel>
             <div className="flex flex-col w-full"> 
                <FormControl>
                <Input
                  {...field}
                  type={type}
                  placeholder={`Enter Your ${label}`}
                  className="input-class"
                    value={field.value ?? ""} 
                onChange={field.onChange} />
                </FormControl>
                <FormMessage className="form-message mt-2" />
             </div>
            </div>
          )}
        />
  )
}

export default CustomForm