"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/componentStyles/pankuzu.scss";
const Pankuzu = () => {
  const router = usePathname();
  // 各パスセグメントを結合するための変数
  let joinedPath = "";

  return (
    <div className='flex items-center text-sm px-4 mt-2 mb-2 w-full'>
      {/* 現在のURLを「/」で分割し、各パスセグメントを処理 */}
      {router.split("/").map((path: any, index: number) => {
        // パスが空でない場合のみ処理
        if (path) {
          joinedPath += path + "/";
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <div className='links'>/{path}</div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Pankuzu;