import { CustomButton } from '@/components/common/CustomButton';
import { Link, generatePath } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  price?: number;
}

const ProductCard = ({ id, title, image, badge = 'New', badgeColor = '#4A69E2', price = 125 }: ProductCardProps) => {
  const detailPath = generatePath(ROUTES.productDetail, { id: String(id) });

  return (
    <article className="flex h-full w-full flex-col gap-2 md:gap-3">
      <Link
        to={detailPath}
        className="block"
        aria-label={`View details for ${title}`}
      >
        <div className="relative h-[180px] w-full overflow-hidden rounded-[16px] border border-[#f1f1f1] bg-[#d8d9dd] p-2 md:h-[350px] md:rounded-[28px]">
          <span
            className="absolute left-0 top-0 rounded-br-3xl px-3 py-1 text-[10px] font-bold text-white md:px-5 md:py-2 md:text-[14px]"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>

          <div className="flex h-full w-full items-center justify-center">
            <img src={image} alt={title} className="h-full w-full rounded-[14px] object-cover" />
          </div>
        </div>
      </Link>

      <Link
        to={detailPath}
        className="block"
      >
        <h3
          className="h-[32px] overflow-hidden text-[16px] font-semibold uppercase leading-[1] tracking-normal text-[#232321] md:h-[48px] md:text-[24px] md:leading-[1]"
          style={{ fontFamily: 'Rubik, sans-serif' }}
        >
          {title}
        </h3>
      </Link>

      <CustomButton
        component={Link}
        to={detailPath}
        variant="contained"
        customColor="#232321"
        sx={{
          width: '100%',
          borderRadius: '8px',
          py: { xs: 1, md: 2 },
          fontSize: { xs: '10px', md: '15px' },
          fontWeight: 700,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          background: 'linear-gradient(90deg, #2f2f2f 0%, #232321 100%) !important',
        }}
      >
        <span className="text-[#f3f3f3]">View Product - </span>
        <span className="text-[#FFA52F]">${price}</span>
      </CustomButton>
    </article>
  );
};

export default ProductCard;
