import classNames from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

import SkillsList from "./SkillsList";

export default function TimelineItem({title, subtitle, link, spacing, icon, skills}) {

	return (
		<div className={classNames({"mb-5": spacing})}>
			<div className="anchor-parent">
				<div className="timeline-dot"></div>
				<div className="d-flex">
					{ 
						icon &&
						<div className="me-1">
							<img src={icon} height="40" width="40" />
						</div>
					}
					<div>
						<p className="fw-bold fs-5 subsection-title relative-title">{title}</p>
						<p className="open-sans-light">{subtitle}</p>
						{
							link &&
							<a href={link} type="button" className="text-redirect" target="_blank">
								<div className="btn btn-outline-dark pill-button d-flex align-content-center mt-2">
									<span className="">Show credentials</span>
									<span className="ms-2 redirect"><FiArrowUpRight size="36" color="black" /></span>
								</div>
							</a>
						}
						{
							skills &&
							<div className="mt-3">
								<SkillsList skills={skills} />
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
}