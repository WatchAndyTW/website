import { ChineseUI } from "./ChineseUI";
import { Dashboard } from "./Dashboard";
import { Music } from "./Music";
import { Games } from "./Games";

export function Features() {
  return (
    <>
      <div className="mt-[10rem] flex flex-col gap-5 sm:mt-[15rem] sm:text-center">
        <h1 className="heading-xl max-[420px]:text-4xl lg:text-6xl xl:text-7xl">
          <span className="heading-lg sm:heading-xl block">您需要的</span>
          <span className="text-gradient from-orange-400 to-red-500">
            所有功能
          </span>
          都在這裡
        </h1>
        <h2 className="heading-md text-secondary">
          從伺服器管理、歡迎消息到音樂播放器和角色扮演系統
          <br />
          我們為您的伺服器提供強大的功能
        </h2>
      </div>
      <ChineseUI />
      <Games />
      <Music />
      <Dashboard />
    </>
  );
}
