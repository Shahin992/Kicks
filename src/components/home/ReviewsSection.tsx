import StarIcon from '@mui/icons-material/Star';
import { dummyReviews } from '@/constants/dummyReviews';

const ReviewsSection = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="mb-5 flex items-center justify-between md:mb-9">
        <h2
          className="animate-fade-up text-[42px] font-semibold uppercase leading-[95%] tracking-[0] text-[#25282c] md:text-[74px]"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          Reviews
        </h2>
        <button
          type="button"
          className="h-10 rounded-[8px] bg-[#4a69e2] px-5 text-[14px] font-semibold uppercase tracking-[0.03em] text-white transition-transform duration-200 hover:-translate-y-0.5 md:h-12 md:px-9 md:text-[24px] md:tracking-normal"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
        {dummyReviews.map((review) => (
          <article key={review.id} className="hover-lift animate-fade-up overflow-hidden rounded-[24px] bg-[#e7e7e3]">
            <div className="flex min-h-[165px] items-start justify-between px-6 pb-6 pt-7 md:min-h-[176px] md:px-8 md:pb-7 md:pt-8">
              <div className="max-w-[250px]">
                <h3
                  className="text-[24px] font-semibold leading-[100%] tracking-[0] text-[#2a2a2a]"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {review.title}
                </h3>
                <p
                  className="mt-3 text-[16px] font-normal leading-[100%] tracking-[0] text-[#555555]"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  {review.text}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={`${review.id}-star-${index}`}
                        sx={{
                          width: '15.759194374084473px',
                          height: '15.881916046142578px',
                          color: '#FFA52F',
                          opacity: 1,
                          transform: 'rotate(0deg)',
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-[16px] font-semibold leading-[100%] tracking-[0] text-[#2a2a2a]"
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {review.rating.toFixed(1)}
                  </p>
                </div>
              </div>

              <img src={review.avatar} alt="Reviewer" className="h-14 w-14 rounded-full object-cover transition-transform duration-300 hover:scale-105 md:h-[64px] md:w-[64px]" />
            </div>

            <img
              src={review.image}
              alt="Review shoes"
              className="h-[220px] w-full object-cover opacity-100 md:h-[325px] md:w-[429.3333435058594px] md:rounded-bl-[32px] md:rounded-br-[32px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
