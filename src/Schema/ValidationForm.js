import { z } from "zod";


export const validationSchema = z.object({
    phone: z.coerce.string().min(1, { message: "شماره تماس الزامی است" }).min(7, { message: "شماره تماس معتبر نیست " }),
    password: z.string().min(1, { message: "پسورد الزامی است" }).min(5, { message: "پسورد کوتاه است" })
})

export const addCourseValidation = z.object({
    teacher: z.string().min(1, { message: "وارد کردن نام مدرس الزامی است" }),
    title: z.string().min(1, { message: "وارد کردن عنوان دوره الزامی است" }),
    category: z.string().min(1, { message: "دسته بندی انتخاب نشده است" }),
    duration: z.string().min(1, { message: "مدت زمان دوره را وارد کنید" }),
    price: z.string().min(1, { message: "مبلغ دوره را وارد کنید" }),
    description: z.string().min(1, { message: "توضیحات دوره ثبت نشده است" }),
    number_of_chapter: z.string().min(1, { message: "تعداد فصل ها را وارد کنید" }),
    number_of_viewer: z.string().min(1, { message: "تعداد بازدید را وارد کنید" }),
    upload_images: z.instanceof(FileList).refine(files => files.length > 0, {message: "فایل نمی‌تواند خالی باشد"})
})
export const editCourseValidation = z.object({
    teacher: z.string().min(1, { message: "وارد کردن نام مدرس الزامی است" }),
    title: z.string().min(1, { message: "وارد کردن عنوان دوره الزامی است" }),
    category: z.string().min(1, { message: "دسته بندی انتخاب نشده است" }),
    duration: z.number().min(1, { message: "مدت زمان دوره را وارد کنید" }),
    price: z.number().min(1, { message: "مبلغ دوره را وارد کنید" }),
    description: z.string().min(1, { message: "توضیحات دوره ثبت نشده است" }),
    number_of_chapter: z.number().min(1, { message: "تعداد فصل ها را وارد کنید" }),
    number_of_viewer: z.number().min(1, { message: "تعداد بازدید را وارد کنید" }),
    upload_images: z.instanceof(FileList).refine(files => files.length > 0, {message: "فایل نمی‌تواند خالی باشد"})

})
