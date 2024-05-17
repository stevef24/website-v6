import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
	logo: (props: IconProps) => (
		<svg
			width="32"
			height="25"
			viewBox="0 0 32 25"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M15.8013 0.273713C15.7272 1.07875 15.4921 2.0609 15.2249 2.65663C15.1444 2.83374 14.4488 4.00909 14.0849 4.57906C13.9787 4.74329 13.705 5.14259 13.4699 5.46782C12.9514 6.18914 12.4008 7.01028 12.2462 7.29365C12.1818 7.40957 12.0466 7.63177 11.9468 7.79277C11.6086 8.32088 11.2963 8.88119 11 9.48335C10.3302 10.8358 10.1306 11.5861 10.137 12.6938C10.1402 13.7275 10.2852 14.2105 10.8777 15.1798C11.0805 15.5083 11.2061 15.6596 11.7503 16.2457L11.8856 16.3906L11.789 16.1942C11.6408 15.8882 11.4702 15.3698 11.3768 14.9286C11.2963 14.5551 11.2898 14.4617 11.2866 13.7823C11.2866 12.9579 11.3124 12.7776 11.5603 11.8083C11.8695 10.6168 12.2108 9.96638 13.8144 7.51906C15.2861 5.27461 15.7626 4.19264 15.8431 2.91746C15.8786 2.37003 15.8818 0.547426 15.8464 0.20931L15.827 0L15.8013 0.273713Z" />
			<path d="M16.1556 0.273713C16.1234 0.679453 16.1298 2.34105 16.1652 2.91746C16.2457 4.19264 16.7223 5.27461 18.1939 7.51906C19.453 9.44149 19.9296 10.2691 20.2033 11.0033C20.3353 11.3575 20.5382 12.1174 20.6477 12.6713C20.7121 12.9933 20.7218 13.135 20.7218 13.7823C20.7185 14.4617 20.7121 14.5551 20.6316 14.9286C20.5382 15.3698 20.3675 15.8882 20.2194 16.1942L20.1228 16.3906L20.258 16.2457C20.8023 15.6596 20.9278 15.5083 21.1307 15.1798C21.7232 14.2105 21.8681 13.7275 21.8713 12.6938C21.8778 12.0434 21.8295 11.6763 21.6685 11.1063C21.4334 10.2626 20.7894 8.93915 20.0616 7.79277C19.9618 7.63177 19.8265 7.40957 19.7621 7.29365C19.6076 7.01028 19.0569 6.18914 18.5385 5.46782C18.3034 5.14259 18.0297 4.74329 17.9234 4.57906C17.5596 4.00909 16.864 2.83374 16.7835 2.65663C16.5194 2.06412 16.3134 1.22366 16.2168 0.354217L16.1781 0L16.1556 0.273713Z" />
			<path d="M0 10.1242C0 10.195 0.20931 10.7392 0.309135 10.9324C0.521665 11.3382 1.1818 12.14 1.59398 12.4878C2.09632 12.916 3.13643 13.5118 3.75148 13.7243C3.91249 13.7823 4.31823 13.9078 4.65312 14.0077C5.46138 14.246 7.34517 14.8449 8.05038 15.0929C8.86508 15.3762 9.21608 15.5405 9.89553 15.9655C10.9775 16.6385 11.4573 17.0475 12.214 17.9524C13.0191 18.9152 13.515 19.6268 14.0206 20.5381C14.3168 21.0727 15.1283 22.6956 15.6049 23.7068C15.7981 24.119 15.9591 24.4442 15.9655 24.4313C15.9784 24.3894 15.5984 23.2012 15.3569 22.5314C14.6549 20.5897 13.9143 19.0859 13.1865 18.1198C12.0595 16.6289 11.3156 15.8947 10.0791 15.0574C9.00999 14.3329 8.47867 14.0528 7.57058 13.7372C6.6625 13.4184 6.25676 13.3057 5.34868 13.1189C4.00909 12.8452 3.15575 12.6069 2.5729 12.3396C2.24445 12.1883 1.6616 11.8437 1.37501 11.628C0.949945 11.3092 0.376758 10.6716 0.0998248 10.2143C0.0257612 10.0952 0 10.0694 0 10.1242Z" />
			<path d="M31.9117 10.2111C31.6316 10.6716 31.0584 11.306 30.6333 11.628C30.3467 11.8437 29.7639 12.1883 29.4354 12.3396C28.8526 12.6069 27.9993 12.8452 26.6597 13.1189C25.7516 13.3057 25.3458 13.4184 24.4378 13.7372C23.5297 14.0528 22.9984 14.3329 21.9293 15.0574C20.6927 15.8947 19.9489 16.6289 18.8218 18.1198C18.0941 19.0859 17.3534 20.5897 16.6514 22.5314C16.4099 23.2012 16.0299 24.3894 16.0428 24.4313C16.0493 24.4442 16.2103 24.119 16.4035 23.7068C16.8801 22.6956 17.6915 21.0727 17.9878 20.5381C18.4934 19.6268 18.9893 18.9152 19.7943 17.9524C20.551 17.0475 21.0308 16.6385 22.1128 15.9655C22.7923 15.5405 23.1433 15.3762 23.958 15.0929C24.6632 14.8449 26.547 14.246 27.3552 14.0077C27.6933 13.9078 28.0991 13.7823 28.2569 13.7243C28.8719 13.5118 29.912 12.916 30.4144 12.4878C30.8265 12.14 31.4867 11.3382 31.6992 10.9324C31.8216 10.7006 32.018 10.1692 31.9987 10.1177C31.9922 10.0984 31.9536 10.1403 31.9117 10.2111Z" />
			<path d="M0.341351 11.3221C0.386434 11.4895 0.463717 11.7697 0.51524 11.9468C0.627945 12.3396 0.869457 13.296 1.14639 14.4553C1.48451 15.8754 1.93533 17.3212 2.267 18.049C2.57936 18.7284 2.97544 19.4175 3.41016 20.0455C3.82878 20.6476 4.83025 21.7167 5.31327 22.0774C5.60308 22.2931 6.52083 22.8406 6.97165 23.066C8.4175 23.7873 10.4945 24.2735 13.1865 24.5183C14.0012 24.5923 14.919 24.6503 15.1895 24.6471L15.3763 24.6438L15.1508 24.5955C15.0285 24.573 14.5551 24.4796 14.1043 24.3894C13.032 24.1801 11.8115 23.9096 11.2867 23.7647C9.75708 23.3461 8.33055 22.7439 7.15198 22.0162C6.68506 21.7296 6.43066 21.5364 5.77053 20.9696C4.7916 20.1292 4.43739 19.7331 4.07029 19.0698C3.97047 18.8894 3.77404 18.5352 3.63235 18.2808C3.22017 17.5498 3.05594 17.1377 2.46343 15.3762C2.15752 14.4649 1.87092 13.6245 1.82584 13.5085C1.66483 13.0803 1.43942 12.6971 1.02724 12.14C0.911319 11.979 0.695568 11.6698 0.547441 11.4476C0.402534 11.2255 0.276948 11.0387 0.270508 11.0322C0.264068 11.0258 0.296269 11.1578 0.341351 11.3221Z" />
			<path d="M31.5091 11.3736C31.3836 11.5668 31.1646 11.8824 31.0197 12.082C30.5495 12.7293 30.3467 13.0706 30.1824 13.5085C30.1374 13.6245 29.8508 14.4649 29.5448 15.3762C28.9523 17.1377 28.7881 17.5498 28.3759 18.2808C28.2342 18.5352 28.0378 18.8894 27.938 19.0698C27.5709 19.7331 27.2167 20.1292 26.2377 20.9696C25.5776 21.5364 25.3232 21.7296 24.8563 22.0162C23.6777 22.7439 22.2512 23.3461 20.7216 23.7647C20.1967 23.9096 18.9763 24.1801 17.904 24.3894C17.4532 24.4796 16.983 24.573 16.8574 24.5955L16.632 24.6438L16.8188 24.6471C17.0893 24.6503 18.007 24.5923 18.8217 24.5183C21.5138 24.2735 23.5908 23.7873 25.0366 23.066C25.4875 22.8406 26.4052 22.2931 26.695 22.0774C27.178 21.7167 28.1795 20.6476 28.5981 20.0455C29.0328 19.4175 29.4289 18.7284 29.7413 18.049C30.073 17.3212 30.5238 15.8754 30.8619 14.4553C31.1388 13.296 31.3803 12.3396 31.493 11.9468C31.6122 11.5378 31.7474 11.029 31.7378 11.029C31.7346 11.029 31.6315 11.1836 31.5091 11.3736Z" />
		</svg>
	),
	linkedIn: (props: IconProps) => <FaLinkedinIn {...props} />,
	github: (props: IconProps) => <FaGithub {...props} />,
	menu: (props: IconProps) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="100"
			height="100"
			viewBox="0 0 50 50"
			fill="currentColor"
		>
			<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
		</svg>
	),
};

export default Icons;
