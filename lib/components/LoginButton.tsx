import { fetchUser, resolveUserAvatar } from "@utils/api";
import clsx from "clsx";
import Image from "next/image";
import { RiUserFill } from "react-icons/ri";
import useSWR from "swr";

export default function LoginButton() {
    const {
        data: user,
        isLoading,
        error,
    } = useSWR("user", fetchUser, {
        refreshInterval: () => 10000,
        errorRetryCount: 0,
    });

    if (error != null) {
        return (
            <button
                className={clsx(
                    "rounded-md px-5 py-1 font-bold break-keep",
                    "text-white bg-black dark:text-black dark:bg-white"
                )}
            >
                控制面板
            </button>
        );
    }

    if (user?.avatar == null || isLoading) {
        return (
            <div
                className={clsx(
                    "rounded-full w-[30px] h-[30px] flex flex-col justify-center items-center",
                    "bg-blue-400 text-white"
                )}
            >
                <RiUserFill className="text-lg" />
            </div>
        );
    }

    return (
        <Image
            alt="avatar"
            src={resolveUserAvatar(user)}
            width="30"
            height="30"
            className="rounded-full"
        />
    );
}
