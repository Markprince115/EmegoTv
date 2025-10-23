'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import useAuthStore from 'store/AuthStore'
import Link from 'next/link'

// Form validation schema
const signupSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: z.string()
    .email("Please enter a valid email"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase and numbers"),
  role: z.enum(["CREATOR", "VIEWER"], {
    required_error: "Please select a role",
  }),
})

const Signup = () => {
  const router = useRouter()
  const setAuth = useAuthStore(state => state.setAuth)
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "VIEWER",
    },
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/auth/signup', data)
      setAuth(response.data.user, response.data.token)
      toast.success("Account created successfully!")
      form.reset()
      router.push('/')
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* form header */}
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold text-left text-neutral-800'>Sign up</h2>
          <p className='text-sm text-neutral-500 text-left'>Create your account to get started</p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
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
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="Enter password" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Role</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="CREATOR" id="creator" />
                    <FormLabel htmlFor="creator">Creator</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="VIEWER" id="viewer" />
                    <FormLabel htmlFor="viewer">Viewer</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-800"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>

        {/* link to login if already have an account */}
        <div>
          <p className="text-sm text-center text-neutral-600">
            Already have an account?
            <Link href="/login" className="text-purple-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default Signup