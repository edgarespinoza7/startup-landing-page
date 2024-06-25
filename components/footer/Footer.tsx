const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className='border-t-[1px] flex items-center justify-center p-10 text-gray-500'>
      {`All rights reserved. © ${year} by NextG Inc.`}
    </footer>
  )
}
