import { Dialog as HUIDialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

interface DialogProps {
  title: string;
  subtitle: ReactNode;
  button: ReactNode;
}

export default function Dialog(props: DialogProps) {
  const { title, subtitle, button } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=''>
        <button onClick={openModal}>{button}</button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <HUIDialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25'></div>
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration 200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <HUIDialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <HUIDialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    {title}
                  </HUIDialog.Title>

                  {subtitle}

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Okay!
                    </button>
                  </div>
                </HUIDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HUIDialog>
      </Transition>
    </>
  );
}
