import Jumbotron from "./Jumbotron";

export default function ContactSection() {
  return (
    <section className='p-6 space-y-10 bg-black text-white'>
      <Jumbotron className='text-right'>Get In Touch</Jumbotron>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 text-lg'>
          <a
            href='http://instagram.com/edwinfernaldy'
            target='_blank'
            rel='noreferrer'
          >
            <p>Instagram</p>
          </a>

          <a
            href='http://www.linkedin.com/in/edwin-fernaldy'
            target='_blank'
            rel='noreferrer'
          >
            <p>LinkedIn</p>
          </a>

          <a
            href='https://api.whatsapp.com/send?phone=6282311016325'
            target='_blank'
            rel='noreferrer'
          >
            <p>WhatsApp</p>
          </a>

          <a href='mailto:edwinfernaldy@gmail.com?subject=INQUIRY ABOUT WEBSITES'>
            <p>E-mail</p>
          </a>
        </div>

        <div className='self-end'>
          <p className='underline underline-offset-1 hover:underline-offset-4 transition-transform duration-150 text-lg'>
            Download My Resume Here
          </p>
        </div>

        <div className='self-end'>
          <p className='text-lg'>Copyright & Stuff &copy; 2022</p>
        </div>
      </div>
    </section>
  );
}
