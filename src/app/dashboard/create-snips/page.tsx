import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea";
import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link";

const StartInterview = () => {
  return (
    <div>
      <div className='p-3 pb-0'>
        <div>
          <h1 className='text-2xl text-gray-600 font-bold flex items-center justify-start gap-2'><IoDocumentTextOutline className='text-3xl text-red-500' /> Document Your snippet here</h1>
        </div>
      </div>
      <div className="p-3 pb-0 flex items-start justify-start gap-3">
        <div className=" w-[60%] ">
          <div className=" p-1 border rounded-t-md ">
            <h1 className="text-sm text-zinc-700 font-semibold ">Snippet editor</h1>
          </div>
          <div>
            <Textarea
              spellCheck={false}
              className="min-h-[78vh] border border-t-0 resize-none scrollbar scrollbar-thumb-red scrollbar-track-light scrollbar-thumb-rounded"
              defaultValue={`// Example code snippet
function sayHello() {
  console.log("Hello, World!");
}

sayHello();`}
            />
          </div>
        </div>
        <div className="w-[40%] min-h-[80vh] px-3 space-y-4">
          <div className="">
            <Label htmlFor="title">Title of snippet</Label>
            <Input id="title" type="text" />
          </div>
          <div className="">
            <Label htmlFor="description">Short description of snippet</Label>
            <Textarea id="description" placeholder="Description..." className="h-56" />
          </div>
          <div className="">
            <Label htmlFor="language">Select language preference</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="apple">JavaScript</SelectItem>
                  <SelectItem value="banana">Python</SelectItem>
                  <SelectItem value="blueberry">Java</SelectItem>
                  <SelectItem value="grapes">Kotlin</SelectItem>
                  <SelectItem value="pineapple">TypeScript</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="output">Add screenshot of output (Optional)</Label>
            <Input id="output" type="file" />
          </div>

          <div className=" float-right">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Upload</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Do you want to add usage instruction or guide?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Enhance your snippet with optional instructions or tips to guide yourself on how to implement it effectively..
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>No</AlertDialogCancel>
                  <Link href="/dashboard/manage-questions"><AlertDialogAction>Yes</AlertDialogAction></Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartInterview