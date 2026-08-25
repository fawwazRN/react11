import { DropdownMenu } from "radix-ui";
import React from "react";

export default function RadixPrimitif() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="inline-flex justify-center items-center bg-white hover:bg-violet3 shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black rounded-full outline-none size-[35px] text-violet11"
            aria-label="Customise options">
            halo
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={2}
            className="bg-white shadow-[0_4px_10px] shadow-blackA9 focus:shadow-[0_0_0_1px] focus:shadow-blackA9 p-[5px] rounded-md min-w-[220px]">
            <DropdownMenu.Item className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              nama
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
