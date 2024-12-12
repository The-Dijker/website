import { FeatureImage } from "@/components/Features/FeatureImage";

export function Features() {
  return (<section className={"space-y-20"}>
    <FeatureImage src={"/features/boot.webp"} alt={"boot"} />
    <FeatureImage src={"/features/comfort.webp"} alt={"comfort"} />
    <FeatureImage src={"/features/fast.webp"} alt={"fast"} />
    <FeatureImage src={"/features/free.webp"} alt={"free"} />
    <FeatureImage src={"/features/protects.webp"} alt={"protects"} />
  </section>);
}
