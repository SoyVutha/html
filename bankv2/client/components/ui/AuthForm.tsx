"use client";
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/icons/logo.svg'
import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomForm from "./CustomForm";


const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address"})
})


const AuthForm = ({type}:{type:string}) => {
    const [user, setUser] = useState(null);
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className=" flex cursor-pointer items-center gap-1">
            <Image className=" max-xl:size-14" alt="horizon logo" src={logo} width={34} height={34}></Image>
            <h1 className="font-inter font-bold text-[26px] text-black-1">Horizon</h1></Link>
            <div className="flex flex-col gap-1 md:gap-3">
                <h1 className="text-24 lg:text-36 font-semibold text-gray-900 ">{user ?'Link Account' :type==='Sign-in' ?'Sign In' : 'Sign Up'}</h1>
                <p className="text-16 font-normal text-gray-600">
                    {user
                    ?'Link Your Account to get Started'
                    :'Please Enter Your Detail' }</p>
            </div>
        </header>
        {user ? (
            <div className="flex flex-col gap-4"></div>
        )
        :(
            <div>
                   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="form-item">
             <FormLabel className="form-label" >
                Email
             </FormLabel>
             <div className="flex flex-col w-full"> 
                <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input-class"/>
                </FormControl>
                <FormMessage className="form-message mt-2" />
             </div>
            
            </div>
          )}
        />
        <CustomForm form={form} name="password" label="password" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>               
            </div>
        )}
    </section>
)
}

  


export default AuthForm
 