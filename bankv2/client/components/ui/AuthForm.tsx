"use client";
import Link from "next/link"
import Image from "next/image"
import logo from '../../public/icons/logo.svg'
import { useState } from "react"
import { z, ZodType } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import CustomSignUp from '../ui/CustomSignUp';
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
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn,signUp } from "@/lib/actions/user.actions";


const formSchema =(type:string)=> z.object({
  //signup
  firstname:type==='Sign-in'? z.string().optional():z.string().min(2, { message: "First Name must be at least 2 characters" }),
  lastname:type==='Sign-in'? z.string().optional():z.string().min(2, { message: "Last Name must be at least 2 characters" }),
  address:type==='Sign-in'? z.string().optional():z.string().min(5, { message: "Address must be at least 5 characters" }),
  state:type==='Sign-in'? z.string().optional():z.string().min(2, { message: "State must be at least 2 characters" }),
  postal_code:type==='Sign-in'? z.string().optional():z.string().min(4, { message: "Postal Code must be at least 4 characters" }),
  birthday: type==='Sign-in'? z.string().optional():z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format (YYYY-MM-DD)" }),
  ssn:type==='Sign-in'? z.string().optional():z.string().min(4, { message: "SSN must be at least 4 characters" }),
  //both
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});


const AuthForm = ({type}:{type:string}) => {
    const [user, setUser] = useState(null);
    const [isloading,setisloading]=useState(false);


      // 1. Define your form.
  const schema = formSchema(type);
  const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
  defaultValues: {
    email: "",
    password: ""
  },
});
    
 const router=useRouter();
  // 2. Define a submit handler.
  const onSubmit=async (values: z.infer<ReturnType<typeof formSchema>>) =>{
    setisloading(true);
    try{
        if(type==='Sign-in'){
          const response= await signIn({
            email:values.email,
            password:values.password,
          })
        }
        if(type==='sign_up'){
          const newUser= await signUp(values);    
          setUser(newUser);
          // sent everything from the form input by user , to do something with it
        }
    }
    catch(error){
      console.error(error);
    }
    finally{
      setisloading(false);
    }

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
          {type==='sign_up'  && (

           <>
  <div className="flex flex-row w-full space-x-4">
    <FormField
      control={form.control}
      name="firstname"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">First Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="Enter Your First Name"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />

    <FormField
      control={form.control}
      name="lastname"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">Last Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text" // Change type to "text" instead of "email"
              placeholder="Enter Your Last Name"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  </div>

  <FormField
    control={form.control}
    name="address"
    render={({ field }) => (
      <div className="form-item w-full mt-4">
        <FormLabel className="form-label">Address</FormLabel>
        <FormControl>
          <Input
            {...field}
            type="text"
            placeholder="Enter Your Address"
            className="input-class"
          />
        </FormControl>
        <FormMessage className="form-message mt-2" />
      </div>
    )}
  />

  <div className="flex flex-row w-full space-x-4 mt-4">
    <FormField
      control={form.control}
      name="state"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">State</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="ex: NY"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />

    <FormField
      control={form.control}
      name="postal_code"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">Postal Code</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="ex: 11101"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  </div>

  <div className="flex flex-row w-full space-x-4 mt-4">
    <FormField
      control={form.control}
      name="birthday"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">Birthday</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="date" 
              placeholder="yyyy-mm-dd"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />

    <FormField
      control={form.control}
      name="ssn"
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel className="form-label">SSN</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text" // Change type to "text" for SSN
              placeholder="ex: 1234"
              className="input-class"
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  </div>
</>

          )}
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
        <CustomForm form={form} name="password" label="password" type="password" />
          <div className="flex flex-col gap-4">
        <Button disabled={isloading} type="submit" className="form-btn">{isloading?(
          <div className="flex flex-row items-center gap-3">
            <Loader2 size={20} className="animate-spin"/>
            Loading...
          </div>
        ):type==='Sign-in'
        ?'Sign in':'Sign up'}</Button>
          </div>
      </form>
    </Form>    
    <footer className="flex justify-center gap-1 ">
      <p className="text-14 font-bold text-gray-600">
        {type==='Sign-in'
        ?'Dont Have an account '
        : 'Already have an account'}
      </p>
      <Link className="form-link" href={type==='Sign-in'?'/Sign-up':'/Sign-in'}>{type==='Sign-in' ? 'Sign up': 'Sign in'}</Link>
    </footer>           
            </div>
        )}
    </section>
)
}

  


export default AuthForm
 