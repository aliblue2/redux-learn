import { RiBarChart2Line, RiBook3Line, RiCheckDoubleFill, RiMessage3Line } from "@remixicon/react"

const HelpSection = () => {
  return (
    <section>
      <h3 className="text-white w-fit font-medium text-2xl border-r-4 p-2 border-secondaryColor">
      ما چه کمکی میتونیم بهت بکنیم
      </h3>
      <h5 className="text-lg p-2 text-gray-300">
      از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره
      </h5>
      <div className="grid grid-cols-2 gap-8 p-5">
        <div className="flex md:flex-row flex-col items-center gap-5 rounded-2xl bg-headingColor p-5 text-white">
            <RiBook3Line size={64} className="text-secondaryColor bg-secondaryColor rounded-full bg-opacity-15 p-2" />
            <div className="flex flex-col items-start justify-center gap-2">
                <h5 className="md:text-xl font-medium ">تضمین کاملترین محتوا</h5>
                <p className="md:text-base text-sm text-gray-400">بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5 rounded-2xl bg-headingColor p-5 text-white">
            <RiMessage3Line size={64} className="text-red-500 bg-red-500 rounded-full bg-opacity-15 p-2" />
            <div className="flex flex-col items-start justify-center gap-2">
                <h5 className="md:text-xl font-medium ">پشتیبانی دائمی</h5>
                <p className="md:text-base text-sm text-gray-400">هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5 rounded-2xl bg-headingColor p-5 text-white">
            <RiBarChart2Line size={64} className="text-primaryColor bg-primaryColor rounded-full bg-opacity-15 p-2" />
            <div className="flex flex-col items-start justify-center gap-2">
                <h5 className="md:text-xl font-medium ">پروژه محور در راستای بازار کار</h5>
                <p className="md:text-base text-sm text-gray-400">کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5 rounded-2xl bg-headingColor p-5 text-white">
            <RiCheckDoubleFill size={64} className="text-yellow-500 bg-yellow-500 rounded-full bg-opacity-15 p-2" />
            <div className="flex flex-col items-start justify-center gap-2">
                <h5 className="md:text-xl font-medium ">سراغ حرفه ای ها رفتیم</h5>
                <p className="md:text-base text-sm text-gray-400">به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default HelpSection
