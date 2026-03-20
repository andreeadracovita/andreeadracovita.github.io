import React from "react";

export default function SkillsList({ skills }) {
	
	return (
		<div className="mt-2">
			<span className="open-sans">Skills: </span>
		{
			skills.map((skill, index) => 
				<React.Fragment key={index}>
					{index > 0 && <span> · </span>}
					<span>{skill}</span>
				</React.Fragment>
				)
		}
		</div>
	);
}