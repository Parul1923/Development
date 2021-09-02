import React from "react";

function EmojiDesc(props){
  return (<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.img}
    </span>
    <span>{props.term}</span>
  </dt>
  <dd>
    {props.def}
  </dd>
</div>);
}

export default EmojiDesc;