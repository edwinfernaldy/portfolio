import Jumbotron from "./Jumbotron";

export default function ContactSection() {
  return (
    <section className='p-6 space-y-10 bg-black text-white'>
      <Jumbotron className='text-right'>Get In Touch</Jumbotron>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-2 text-lg'>
          <a
            className='hover:translate-x-5 transition-all'
            href='http://instagram.com/edwinfernaldy'
            target='_blank'
            rel='noreferrer'
          >
            <p>Instagram</p>
          </a>

          <a
            className='hover:translate-x-5 transition-all'
            href='http://www.linkedin.com/in/edwin-fernaldy'
            target='_blank'
            rel='noreferrer'
          >
            <p>LinkedIn</p>
          </a>

          <a
            className='hover:translate-x-5 transition-all'
            href='https://api.whatsapp.com/send?phone=6282311016325'
            target='_blank'
            rel='noreferrer'
          >
            <p>WhatsApp</p>
          </a>

          <a
            className='hover:translate-x-5 transition-all'
            href='mailto:edwinfernaldy@gmail.com?subject=INQUIRY ABOUT WEBSITES'
          >
            <p>E-mail</p>
          </a>
        </div>

        <div className='self-end hidden md:block'>
          <p className='hover:scale-125 transition-all duration-150 text-lg'>
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
