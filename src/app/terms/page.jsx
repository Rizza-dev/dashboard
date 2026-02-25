import { CircleDashed } from "lucide-react";

export default function Terms() {
  return (
    <div className="w-full min-h-[70vh] h-full max-w-screen-lg mx-auto mt-10 space-y-6">
      <h1 className="text-4xl text-center">قوانین و مقررات فروشگاه</h1>
      <div className="w-full h-full">
        <ul className="w-full h-full">
          <li className="text-2xl mt-8">
            <h2 className="text-2xl">1.مقدمه</h2>
            <p className="mt-4 text-lg text-wrap">
              به فروشگاه اینترنتی khanezy خوش آمدید. استفاده از این وب‌سایت و
              ثبت سفارش به منزله پذیرش کامل قوانین و مقررات زیر از سوی کاربر
              می‌باشد.
            </p>
          </li>
          <li className="mt-10">
            <h2 className="text-2xl">2. ثبت سفارش</h2>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  کاربران می‌توانند در تمامی روزهای هفته به صورت ۲۴ ساعته سفارش
                  خود را ثبت نمایند.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  ثبت سفارش به معنی رزرو کالا بوده و پس از تأیید پرداخت، سفارش
                  نهایی خواهد شد.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  فروشگاه حق دارد در صورت اتمام موجودی یا بروز خطا در
                  قیمت‌گذاری، سفارش را لغو و مبلغ پرداختی را عودت دهد.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">3. روش‌های پرداخت</h2>
            <p className="mt-4 text-wrap">
              پرداخت سفارش‌ها از طریق درگاه پرداخت اینترنتی معتبر انجام می‌شود و
              اطلاعات بانکی کاربران نزد فروشگاه ذخیره نخواهد شد.
            </p>
          </li>
          <li className="mt-10">
            <h2 className="text-2xl">4. ارسال و تحویل سفارش</h2>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  زمان آماده‌سازی و ارسال سفارش معمولاً بین ۱ تا ۳ روز کاری
                  می‌باشد.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>مسئولیت صحت آدرس واردشده بر عهده مشتری می‌باشد.</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>زمان تحویل بسته به شهر مقصد و شرکت حمل‌ونقل متفاوت است.</p>
              </div>
            </div>
          </li>
          <li className="mt-10">
            <h2 className="text-2xl">5. شرایط بازگشت کالا</h2>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  کاربران تا ۷ روز پس از دریافت کالا می‌توانند درخواست بازگشت
                  ثبت نمایند.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  کالا باید در شرایط اولیه، بدون استفاده و همراه با بسته‌بندی
                  اصلی باشد.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-start gap-2">
                <CircleDashed size={16}/>
                <p>
                  هزینه ارسال مرجوعی در صورت وجود ایراد یا اشتباه از طرف فروشگاه
                  بر عهده فروشگاه خواهد بود.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">6. مسئولیت کاربران</h2>
            <p className="mt-4 text-wrap">
              کاربران متعهد می‌شوند اطلاعات صحیح و کامل هنگام ثبت سفارش وارد
              نمایند. مسئولیت هرگونه مشکل ناشی از اطلاعات نادرست بر عهده کاربر
              است.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">7. حفظ حریم خصوصی</h2>
            <p className="mt-4 text-wrap">
              اطلاعات کاربران صرفاً جهت پردازش سفارش‌ها استفاده شده و نزد
              فروشگاه محفوظ خواهد ماند و در اختیار شخص یا سازمان دیگری قرار
              نخواهد گرفت.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">8. مالکیت معنوی</h2>
            <p className="mt-4 text-wrap">
              تمامی محتوا، تصاویر و طراحی‌های این وب‌سایت متعلق به فروشگاه بوده
              و هرگونه استفاده بدون اجازه پیگرد قانونی خواهد داشت.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">9. تغییر قوانین</h2>
            <p className="mt-4 text-wrap">
              فروشگاه می‌تواند در هر زمان قوانین و مقررات را به‌روزرسانی نماید.
              نسخه به‌روز از طریق همین صفحه در دسترس خواهد بود.
            </p>
          </li>
          <li className="mt-8">
            <h2 className="text-2xl">10. اطلاعات تماس</h2>
            <p className="mt-4 text-wrap">
              در صورت وجود هرگونه سؤال، کاربران می‌توانند از طریق صفحه «تماس با
              ما» با پشتیبانی ارتباط برقرار نمایند.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
