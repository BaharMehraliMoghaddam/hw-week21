import { z } from "zod";


export const validationSchema = z.object({
    phone: z.coerce.string().min(1, { message: "you should fill the password field." }).min(7, { message: "phone number is not valid." }),
    password: z.string().min(1, { message: "you should fill the password field." }).min(5, { message: "password is short." })
})

export const addCourseValidation = z.object({
    teacher: z.string().min(1, { message: "you should write the teacher name." }),
    title: z.string().min(1, { message: "you should write the title of the course." }),
    category: z.string().min(1, { message: "you should choose the category of the course." }),
    duration: z.string().min(1, { message: "you should write the duration of the course." }),
    price: z.string().min(1, { message: "you should write the price of the course." }),
    description: z.string().min(1, { message: "you should add the caption of the course." }),
    number_of_chapter: z.string().min(1, { message: "you should write number of chapters."}),
    number_of_viewer: z.string().min(1, { message: "you should write number of views." }),
    upload_images: z.instanceof(FileList).refine(files => files.length > 0, {message: "you should import a file."})
})
export const editCourseValidation = z.object({
    teacher: z.string().min(1, { message: "you should write the teacher name." }),
    title: z.string().min(1, { message: "you should write the title of the course." }),
    category: z.string().min(1, { message: "you should choose the category of the course." }),
    duration: z.number().min(1, { message: "you should write the duration of the course." }),
    price: z.number().min(1, { message: "you should write the price of the course."  }),
    description: z.string().min(1, { message: "you should add the caption of the course." }),
    number_of_chapter: z.number().min(1, { message: "you should write number of chapters." }),
    number_of_viewer: z.number().min(1, { message: "you should write number of views." }),
    upload_images: z.instanceof(FileList).refine(files => files.length > 0, {message: "you should import a file."})

})
