import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
  return(
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de FeedBack">
      <X weight="bold" className="w4 h4"/>

      </Popover.Button>
  );
}