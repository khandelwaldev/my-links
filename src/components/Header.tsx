import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { BsThreeDots, BsChevronRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Snapchat from './icons/Snapchat';
import Link from 'next/link';
import Facebook from './icons/Facebook';
import LinkedIn from './icons/LinkedIn';
import WhatsApp from './icons/WhatsApp';
import Email from './icons/Email';
import Share from './icons/Share';


const Header: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showNavbar = scrollY > 100;

  // menu items 
  const pageUrl = `https://d3v.pages.dev/links`
  const message = `Check out this Linkstree! -`

  const menuItems = [
    { label: 'Share on Facebook', icon: <Facebook />, href: `https://www.facebook.com/sharer.php?u=${pageUrl}` },
    { label: 'Share on LinkedIn', icon: <LinkedIn />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}` },
    { label: 'Share on X', icon: <img src='https://img.icons8.com/?size=500&id=phOKFKYpe00C&format=png' />, href: `https://x.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20${pageUrl}` },
    { label: 'Share on WhatsApp', icon: <WhatsApp />, href: `https://wa.me/?text=Check%20out%20this%20Linktree!%20-%20${pageUrl}` },
    { label: 'Share on Messenger', icon: <img src='https://img.icons8.com/?size=500&id=YFbzdUk7Q3F8&format=png' />, href: `https://www.messenger.com/new` },
    { label: 'Share on Email', icon: <Email />, href: `mailto:?subject=%20Check%20out%20this%20Linktree!%20&body=%20Check%20out%20this%20Linktree!%20-%20${pageUrl}` },
    { label: 'More Options', icon: <Share />, href: `` },
  ]

  // copy link on click
  const handleCopyClick = async () => {
    try {
      const textToCopy = 'https://d3v.pages.dev/links';
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (copied) {
      // Reset the copied state after 2000 milliseconds (adjust as needed)
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => {
      // Clear the timeout if the component unmounts or if the copied state changes
      clearTimeout(timeoutId);
    };
  }, [copied]);

  return (
    <div>
      {showNavbar && (
        <div className="fixed top-4 left-[50%] max-w-[600px] translate-x-[-50%] w-full h-[70px] bg-[#00000080] backdrop-blur-sm text-white py-2 px-4 flex items-center justify-between border-2 border-[#353535] rounded-2xl" style={{ zIndex: 999999 }}>
          <div className="w-[44px] h-[44px]">
            <Image src={`https://github.com/khandelwaldev.png`} width={44} height={44} alt='Dev' className='rounded-full' />
          </div>
          <div className='flex items-center gap-1'>
            <h1 className='text-base font-semibold font-sans'>Dev Khandelwal</h1>
            <Image src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUyNDcgMTUuMTIzNEM4LjIwMyAxNC45MjUxIDcuNzk3IDE0LjkyNTEgNy40NzUzIDE1LjEyMzRMNy4xNDg3MyAxNS4zMjQ3QzYuNjk0MiAxNS42MDQ4IDYuMDk5NzQgMTUuNDc4NSA1Ljc5ODQ1IDE1LjAzNzdMNS41ODE5OSAxNC43MjFDNS4zNjg3NSAxNC40MDkgNC45OTc4NSAxNC4yNDM4IDQuNjIzMzIgMTQuMjk0MUw0LjI0MzExIDE0LjM0NTJDMy43MTM5MiAxNC40MTYyIDMuMjIyMjYgMTQuMDU5IDMuMTI2MzEgMTMuNTMzOEwzLjA1NzM3IDEzLjE1NjRDMi45ODk0NyAxMi43ODQ3IDIuNzE3OCAxMi40ODMgMi4zNTUxOSAxMi4zNzY2TDEuOTg3MDkgMTIuMjY4NkMxLjQ3NDc1IDEyLjExODIgMS4xNzA4OCAxMS41OTE5IDEuMjk2ODcgMTEuMDczMUwxLjM4NzM4IDEwLjcwMDNDMS40NzY1NSAxMC4zMzMgMS4zNTEwOSA5Ljk0NjkyIDEuMDYzMSA5LjcwMjI0TDAuNzcwNzU3IDkuNDUzODVDMC4zNjM4NTIgOS4xMDgxMyAwLjMwMDMyNyA4LjUwMzczIDAuNjI2NDYyIDguMDgwOTZMMC44NjA3NzcgNy43NzcyMkMxLjA5MTYgNy40NzgwMSAxLjEzNDA0IDcuMDc0MjQgMC45NzA0NjggNi43MzM1OEwwLjgwNDQyNCA2LjM4Nzc2QzAuNTczMzE0IDUuOTA2NDMgMC43NjExMTQgNS4zMjg0NCAxLjIzMTAxIDUuMDc0ODhMMS41Njg2MSA0Ljg5MjdDMS45MDExNyA0LjcxMzI0IDIuMTA0MTcgNC4zNjE2NCAyLjA5MzMgMy45ODM5TDIuMDgyMjcgMy42MDA0NEMyLjA2NjkyIDMuMDY2NzIgMi40NzM1NyAyLjYxNTA5IDMuMDA1OTcgMi41NzQ1N0wzLjM4ODQ4IDIuNTQ1NDZDMy43NjUyOSAyLjUxNjc4IDQuMDkzNzUgMi4yNzgxNCA0LjIzNzQ2IDEuOTI4NjRMNC4zODMzNSAxLjU3Mzg1QzQuNTg2NCAxLjA4MDAyIDUuMTQxNiAwLjgzMjgzNiA1LjY0NDQ1IDEuMDEyMzdMNi4wMDU3MyAxLjE0MTM1QzYuMzYxNjMgMS4yNjg0MiA2Ljc1ODc1IDEuMTg0MDEgNy4wMzIxOSAwLjkyMzE3M0w3LjMwOTc4IDAuNjU4MzkxQzcuNjk2MTMgMC4yODk4NTIgOC4zMDM4NyAwLjI4OTg1MiA4LjY5MDIyIDAuNjU4MzkyTDguOTY3ODEgMC45MjMxNzNDOS4yNDEyNSAxLjE4NDAxIDkuNjM4MzcgMS4yNjg0MiA5Ljk5NDI3IDEuMTQxMzVMMTAuMzU1NSAxLjAxMjM3QzEwLjg1ODQgMC44MzI4MzYgMTEuNDEzNiAxLjA4MDAyIDExLjYxNjcgMS41NzM4NUwxMS43NjI1IDEuOTI4NjRDMTEuOTA2MyAyLjI3ODE0IDEyLjIzNDcgMi41MTY3OCAxMi42MTE1IDIuNTQ1NDZMMTIuOTk0IDIuNTc0NTdDMTMuNTI2NCAyLjYxNTA5IDEzLjkzMzEgMy4wNjY3MiAxMy45MTc3IDMuNjAwNDRMMTMuOTA2NyAzLjk4MzlDMTMuODk1OCA0LjM2MTY0IDE0LjA5ODggNC43MTMyNCAxNC40MzE0IDQuODkyN0wxNC43NjkgNS4wNzQ4OEMxNS4yMzg5IDUuMzI4NDQgMTUuNDI2NyA1LjkwNjQzIDE1LjE5NTYgNi4zODc3NkwxNS4wMjk1IDYuNzMzNThDMTQuODY2IDcuMDc0MjQgMTQuOTA4NCA3LjQ3ODAxIDE1LjEzOTIgNy43NzcyMkwxNS4zNzM1IDguMDgwOTZDMTUuNjk5NyA4LjUwMzczIDE1LjYzNjEgOS4xMDgxMyAxNS4yMjkyIDkuNDUzODVMMTQuOTM2OSA5LjcwMjI0QzE0LjY0ODkgOS45NDY5MiAxNC41MjM0IDEwLjMzMyAxNC42MTI2IDEwLjcwMDNMMTQuNzAzMSAxMS4wNzMxQzE0LjgyOTEgMTEuNTkxOSAxNC41MjUzIDEyLjExODIgMTQuMDEyOSAxMi4yNjg2TDEzLjY0NDggMTIuMzc2NkMxMy4yODIyIDEyLjQ4MyAxMy4wMTA1IDEyLjc4NDcgMTIuOTQyNiAxMy4xNTY0TDEyLjg3MzcgMTMuNTMzOEMxMi43Nzc3IDE0LjA1OSAxMi4yODYxIDE0LjQxNjIgMTEuNzU2OSAxNC4zNDUyTDExLjM3NjcgMTQuMjk0MUMxMS4wMDIxIDE0LjI0MzggMTAuNjMxMyAxNC40MDkgMTAuNDE4IDE0LjcyMUwxMC4yMDE1IDE1LjAzNzdDOS45MDAyNiAxNS40Nzg1IDkuMzA1OCAxNS42MDQ4IDguODUxMjcgMTUuMzI0N0w4LjUyNDcgMTUuMTIzNFoiIGZpbGw9IiMwMEI2RkYiLz4KPHBhdGggZD0iTTUuMDY5OTggNy41NjI2NUw3LjE5MTMgOS42ODM5N0wxMS40MzM5IDUuNDQxMzMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K'} width={16} height={16} alt="Dev" />
          </div>
          <div className='w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center'>
            <button className='text-[24px]'>
              {menuOpen ? (
                <IoClose onClick={closeMenu} />
              ) : (
                <BsThreeDots onClick={openMenu} />
              )}
            </button>
          </div>
          {/** Menu */}
          <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-[70px] right-0 max-w-[600px] w-full max-h-screen overflow-y-auto h-fit p-3 bg-[#fff] text-[#000] border-2 border-[#353535] rounded-lg`}>
            <div className='w-full h-[30px] flex items-center justify-center'>
              <h1 className='text-lg font-medium'>Share this tree</h1>
            </div>
            <div className='flex flex-col w-full h-fit mt-6'>
              {menuItems.map((item) => (
                <Link onClick={handleLinkClick} key={item.label} href={item.href} className='w-full h-[45px] flex items-center justify-between hover:bg-[#0000001a] px-2 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <i className='w-5 h-5'>{item.icon}</i>
                    <span className='text-base font-medium'>{item.label}</span>
                  </div>
                  <i className='text-[20px]'><BsChevronRight /></i>
                </Link>
              ))}
              <button onClick={handleCopyClick} className='w-full h-[50px] flex items-center justify-between border border-[#353535] rounded-lg mt-6 px-4 hover:bg-[#0000003b]'>
                <div className='flex items-center gap-4'>
                  <Image src={`https://github.com/khandelwaldev.png`} width={30} height={30} alt='Dev' className='rounded-full' />
                  <h1 className='text-lg font-medium text-[#000]'>d3v.pages.dev/links</h1>
                </div>
                <button className='text-lg text-[#000] font-medium'>
                  {copied ? <span className='text-[#ff4000]'>Copied!</span> : 'Copy'}
                </button>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header