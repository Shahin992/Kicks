import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TwitterIcon from '@mui/icons-material/Twitter';
import BasicInput from '@/components/common/BasicInput';
import { CustomButton } from '@/components/common/CustomButton';
import FooterLogo from '@/components/common/FooterLogo';

const Footer = () => {
  return (
    <footer className="mt-14 pb-3 md:mt-16">
      <div className="mx-auto w-full max-w-[1320px] px-2 md:px-0">
        <section className="overflow-hidden rounded-[48px] bg-[#4A69E2]">
          <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-2 md:gap-8 md:p-10">
            <div className="space-y-4 md:max-w-[560px] md:space-y-5">
              <h2
                className="max-w-[620px] text-[30px] font-extrabold uppercase leading-[1.08] text-[#f5f5f5] sm:text-[38px] md:text-[48px] md:font-semibold md:leading-[1]"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              >
                <span className="block">Join our KicksPlus</span>
                <span className="block">Club &amp; get 15% off</span>
              </h2>
              <p className="text-[14px] font-medium text-[#e4eaff] sm:text-[16px] md:text-[18px]">Sign up for free! Join the community.</p>

              <form className="flex max-w-[510px] items-center gap-2 md:gap-1.5">
                <BasicInput
                  fullWidth
                  placeholder="Email address"
                  sx={{
                    backgroundColor: 'transparent !important',
                    border: '1px solid #c4ceff !important',
                    borderRadius: '6px',
                    height: { xs: '40px', sm: '44px' },
                    px: 1.5,
                    '& input': {
                      color: '#f5f5f5',
                      fontSize: '14px',
                      '&::placeholder': {
                        color: '#bcc6ff',
                        opacity: 1,
                      },
                    },
                  }}
                />
                <CustomButton
                  variant="contained"
                  type="button"
                  customColor="#232321"
                  sx={{
                    height: { xs: '40px', sm: '44px' },
                    borderRadius: '7px',
                    px: 2,
                    fontSize: { xs: '11px', sm: '12px' },
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Submit
                </CustomButton>
              </form>
            </div>

            <div className="hidden items-center justify-end md:flex">
              <FooterLogo className="h-[78px] w-auto" />
            </div>

            <div className="pb-5 md:hidden">
              <FooterLogo className="h-[42px] w-auto" />
            </div>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-t-[32px] bg-[#232321] px-4 pb-36 pt-8 text-[#e7e7e3] md:mt-6 md:rounded-t-[44px] md:px-9 md:pb-56 md:pt-10">
            <div className="relative z-10 grid gap-8 md:grid-cols-[2.15fr_1.15fr_1.05fr_1.1fr] md:gap-9">
              <div className="max-w-[500px]">
                <h3 className="mb-3 text-[24px] font-bold leading-none text-[#ffa52f] sm:text-[30px] md:mb-4 md:text-[48px]">
                  About us
                </h3>
                <p className="text-[14px] leading-[1.4] text-[#e7e7e3] sm:text-[15px] md:text-[16px] md:leading-[1.42]">
                  We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                </p>
              </div>

              <div>
                <h4 className="mb-3 whitespace-nowrap text-[24px] font-bold leading-none text-[#ffa52f] sm:text-[30px] md:mb-4 md:text-[48px]">
                  Categories
                </h4>
                <ul className="space-y-1.5 text-[14px] leading-[1.35] text-[#e7e7e3] md:text-[16px] md:leading-[1.32]">
                  <li>Runners</li>
                  <li>Sneakers</li>
                  <li>Basketball</li>
                  <li>Outdoor</li>
                  <li>Golf</li>
                  <li>Hiking</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 whitespace-nowrap text-[24px] font-bold leading-none text-[#ffa52f] sm:text-[30px] md:mb-4 md:text-[48px]">
                  Company
                </h4>
                <ul className="space-y-1.5 text-[14px] leading-[1.35] text-[#e7e7e3] md:text-[16px] md:leading-[1.32]">
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 whitespace-nowrap text-[24px] font-bold leading-none text-[#ffa52f] sm:text-[30px] md:mb-4 md:text-[48px]">
                  Follow us
                </h4>
                <div className="flex items-center gap-4 text-[#e7e7e3]">
                  <FacebookOutlinedIcon sx={{ fontSize: { xs: 22, md: 34 } }} />
                  <InstagramIcon sx={{ fontSize: { xs: 22, md: 34 } }} />
                  <TwitterIcon sx={{ fontSize: { xs: 22, md: 34 } }} />
                  <MusicNoteIcon sx={{ fontSize: { xs: 22, md: 34 } }} />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-0 right-0 z-0 flex justify-center md:-bottom-28">
              <FooterLogo className="h-auto w-[94%] opacity-95 md:w-[96%]" />
            </div>
          </div>
        </section>
        <p className="mt-3 text-center text-[16px] text-[#232321]">© All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
