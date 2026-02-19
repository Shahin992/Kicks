import { CustomButton } from '@/components/common/CustomButton';

const heroImage = '/images/hero-section-bg.jpg';

const thumbOne =
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80';

const thumbTwo =
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80';

const HeroSection = () => {
  return (
    <section className="space-y-5 md:space-y-8">
      <h1 className="text-center text-[52px] font-black uppercase leading-[0.95] tracking-tight text-[#232321] sm:text-[74px] md:text-[122px]">
        <span className="text-[#232321]">Do It </span>
        <span className="text-[#4a3ce2]">Right</span>
      </h1>

      <div className="relative overflow-hidden rounded-[26px] border border-[#5b8ef4] bg-[#151515]">
        <img src={heroImage} alt="Nike Air Max" className="h-[360px] w-full object-cover md:h-[700px]" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute left-4 top-10 hidden md:block">
          <span className="block rotate-180 rounded-lg bg-[#1a1a1a] px-3 py-4 text-[12px] font-semibold text-white [writing-mode:vertical-rl]">
            Nike product of the year
          </span>
        </div>

        <div className="absolute bottom-4 left-4 z-10 max-w-[350px] text-white md:bottom-12 md:left-12 md:max-w-[500px]">
          <h2 className="text-[42px] font-extrabold uppercase leading-[0.95] tracking-tight md:text-[76px]">
            Nike Air Max
          </h2>
          <p className="mt-2 text-[16px] leading-[1.2] text-white/90 md:mt-4 md:text-[36px]">
            Nike introducing the new air max for everyone's comfort
          </p>
          <CustomButton
            variant="contained"
            customColor="#4a3ce2"
            sx={{
              mt: { xs: 2, md: 4 },
              borderRadius: '6px',
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 2 },
              fontSize: { xs: '11px', md: '16px' },
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Shop now
          </CustomButton>
        </div>

        <div className="absolute bottom-4 right-4 z-10 hidden w-[130px] flex-col gap-3 md:bottom-10 md:right-10 md:flex md:w-[180px] md:gap-5">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/10 p-1 shadow-lg backdrop-blur-sm">
            <img src={thumbOne} alt="Shoe thumbnail 1" className="h-24 w-full rounded-xl object-cover md:h-32" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/10 p-1 shadow-lg backdrop-blur-sm">
            <img src={thumbTwo} alt="Shoe thumbnail 2" className="h-24 w-full rounded-xl object-cover md:h-32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
