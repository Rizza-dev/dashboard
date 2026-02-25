import { CircleDashed } from "lucide-react";

export default function Privacy() {
  return (
    <div className="w-full min-h-[70vh] h-full max-w-screen-lg mx-auto mt-10 space-y-6">
      <h1 className="text-4xl text-center">سیاست حفظ حریم خصوصی</h1>
      <div className="w-full h-full">
        <ul className="w-full h-full">
          <li className="text-2xl mt-8">
            <h2 className="text-2xl">1.مقدمه</h2>
            <p className="mt-4 text-lg text-wrap">
              فروشگاه اینترنتی به حفظ و حراست از اطلاعات شخصی کاربران متعهد است.
              این صفحه نحوه جمع‌آوری، استفاده و حفاظت از اطلاعات کاربران را
              توضیح می‌دهد.
            </p>
          </li>
          <li className="mt-10">
            <h2 className="text-2xl">2. اطلاعاتی که جمع‌آوری می‌شود</h2>
            <h3 className="text-lg my-4">
              هنگام استفاده از وب‌سایت ممکن است اطلاعات زیر از کاربران دریافت
              شود:
            </h3>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>نام و نام خانوادگی</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>شماره تلفن همراه</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>آدرس پستی جهت ارسال سفارش</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>اطلاعات مربوط به سفارش‌ها و خریدها</p>
              </div>
            </div>
            <h3 className="text-lg my-4">
              این اطلاعات صرفاً برای ارائه خدمات بهتر و پردازش سفارش‌ها استفاده
              می‌شود.
            </h3>
          </li>
          <li className="mt-10">
            <h2 className="text-2xl">3. نحوه استفاده از اطلاعات</h2>
            <h3 className="text-lg my-4">
              اطلاعات کاربران تنها برای اهداف زیر استفاده خواهد شد:
            </h3>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>ثبت و پردازش سفارش‌ها</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>ارسال اطلاعیه‌های مربوط به سفارش</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>پشتیبانی مشتریان</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16} />
                <p>بهبود کیفیت خدمات فروشگاه</p>
              </div>
            </div>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">4. حفاظت از اطلاعات کاربران</h2>
            <p className="mt-4 text-wrap">
              فروشگاه متعهد است از اطلاعات کاربران با استفاده از روش‌های امنیتی
              مناسب محافظت نماید و از دسترسی غیرمجاز جلوگیری کند.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">5. عدم اشتراک‌گذاری اطلاعات</h2>
            <p className="mt-4 text-wrap">
              اطلاعات شخصی کاربران تحت هیچ شرایطی به اشخاص یا سازمان‌های دیگر
              فروخته یا واگذار نخواهد شد، مگر در مواردی که طبق قوانین کشور الزام
              قانونی وجود داشته باشد.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">6. پرداخت‌های اینترنتی</h2>
            <p className="mt-4 text-wrap">
              پرداخت‌ها از طریق درگاه‌های پرداخت امن انجام می‌شود و فروشگاه
              هیچ‌گونه اطلاعات بانکی کاربران (مانند شماره کارت یا رمز عبور) را
              ذخیره نمی‌کند.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">7. کوکی‌ها (Cookies)</h2>
            <p className="mt-4 text-wrap">
              ممکن است وب‌سایت برای بهبود تجربه کاربری از کوکی‌ها استفاده کند.
              کاربران می‌توانند تنظیمات مرورگر خود را برای غیرفعال‌سازی کوکی‌ها
              تغییر دهند.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">8. حقوق کاربران</h2>
            <p className="mt-4 text-wrap">
              کاربران می‌توانند در هر زمان درخواست ویرایش یا حذف اطلاعات خود را
              از طریق بخش پشتیبانی ثبت نمایند.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">9. تغییرات در سیاست حریم خصوصی</h2>
            <p className="mt-4 text-wrap">
              فروشگاه ممکن است در صورت نیاز این سیاست را به‌روزرسانی کند. نسخه
              جدید از طریق همین صفحه منتشر خواهد شد.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">10. اطلاعات تماس</h2>
            <p className="mt-4 text-wrap">
              در صورت وجود هرگونه سؤال درباره حریم خصوصی، کاربران می‌توانند از
              طریق صفحه «تماس با ما» با پشتیبانی ارتباط برقرار کنند.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
