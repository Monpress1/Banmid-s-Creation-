import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const images = [
  { src: gallery1, alt: "Elegant blue ball gown" },
  { src: gallery2, alt: "Detailed corset back design" },
  { src: gallery3, alt: "Ankara print corset" },
  { src: gallery4, alt: "Runway floral dress design" },
  { src: gallery5, alt: "Royal blue flowing gown" },
  { src: gallery6, alt: "African print runway dress" },
  { src: gallery7, alt: "White bridal gown with ruffles" },
];

const AutoScrollGallery = () => {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="animate-scroll-gallery flex gap-4" style={{ width: "fit-content" }}>
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollGallery;