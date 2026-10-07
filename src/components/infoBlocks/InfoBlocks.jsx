import { contactBlocksData } from "../../assets/databases/contactInfo/geralInfo";
import { Block } from "../blockContact/Block.jsx";
import "./InfoBlocks.css"

export const InfoBlocks = () => {
  return (
    <div className="info-blocks-container">
      {contactBlocksData.map((block) => (
        <Block
          key={block.id}
          title={block.title}
          text={block.text}
          icon={block.icon}
          href={block.href}
        />
      ))}
    </div>
  );
};
