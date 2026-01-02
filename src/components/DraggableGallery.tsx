import { useRef, useState, useEffect } from "react";
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

const DraggableGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let lastTime = 0;
    const speed = 0.5; // pixels per millisecond

    const animate = (time: number) => {
      if (lastTime !== 0) {
        const delta = time - lastTime;
        scrollContainer.scrollLeft += speed * delta * 0.05;

        // Reset scroll position for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isAutoScrolling]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <div className="w-full py-8">
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto scrollbar-hide cursor-grab ${
          isDragging ? "cursor-grabbing" : ""
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-2xl shadow-card group relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-background font-body text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-muted-foreground text-sm mt-4 font-body">
        ← Drag to explore more →
      </p>
    </div>
  );
};

export default DraggableGallery;
