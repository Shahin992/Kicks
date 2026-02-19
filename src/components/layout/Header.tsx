import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CustomIconButton } from '@/components/common/CustomIconButton';
import TopbarLogo from '@/components/common/TopbarLogo';

const Header = () => {
  return (
    <header className="bg-[#cdcdcc] px-4 py-5 md:px-8 md:py-7">
      <div className="mx-auto w-full max-w-[1220px] rounded-[18px] bg-[#f3f3f3] px-4 py-3 md:rounded-[24px] md:px-7 md:py-5">
        <div className="relative hidden items-center justify-between md:flex">
          <nav className="flex items-center gap-10 text-base font-semibold text-[#232321]">
            <a href="#new-drops" className="flex items-center gap-1">
              <span>New Drops</span>
              <span className="text-sm leading-none">🔥</span>
            </a>
            <a href="#men" className="flex items-center">
              <span>Men</span>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </a>
            <a href="#women" className="flex items-center">
              <span>Women</span>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </a>
          </nav>

          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <TopbarLogo className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-7 text-[#232321]">
            <SearchIcon sx={{ fontSize: 30 }} />
            <PersonIcon sx={{ fontSize: 30 }} />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffa52f] text-sm font-semibold text-[#232321]">
              0
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          <CustomIconButton aria-label="Menu" customColor="#232321" sx={{ p: 0 }}>
            <MenuIcon sx={{ fontSize: 22 }} />
          </CustomIconButton>

          <a href="/">
            <TopbarLogo className="h-[25px] w-auto" />
          </a>

          <div className="flex items-center gap-2 text-[#232321]">
            <PersonIcon sx={{ fontSize: 18 }} />
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffa52f] text-[12px] font-semibold leading-none">
              0
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
