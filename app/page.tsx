"use client"
import { useEffect, useRef } from "react";
import styles from "./styles/page.module.css";
import NavbarSection from '@Modules/NavbarSection'
import HomePage from '@Page/HomePage'
import Canvas3d from '@Page/Canvas3d'
import FooterSection from '@Modules/FooterSection'
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const lenis = useRef<Lenis>(); // Tạo tham chiếu cho Lenis

  useEffect(() => {
    // Khởi tạo Lenis
    lenis.current = new Lenis({
      lerp:.072
      // Cấu hình khác như tốc độ, hướng, v.v.
      // example: direction: "vertical", lerp: 0.1, smoothWheel: true, etc.
    });
    window.lenis = lenis.current
    function raf(time:any) {
      lenis.current?.raf(time); // Cập nhật Lenis cho mỗi khung hình
      requestAnimationFrame(raf); // Tiếp tục yêu cầu cập nhật mỗi frame
    }

    requestAnimationFrame(raf); // Bắt đầu animation

    return () => {
      // Cleanup Lenis khi component bị huỷ
      if (lenis.current) {
        lenis.current.destroy();
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      <NavbarSection />
     {/*  <Canvas3d /> */}
      <HomePage />
      <footer>
        <FooterSection />
      </footer>
    </main>
  );
}
