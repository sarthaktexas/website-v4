import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Balancer from 'react-wrap-balancer'

export default function Footer() {

    const song = useSWR('/api/now-playing', fetcher).data

    return (
        <div className="grow-0 my-5 lg:mb-20 mx-8 md:mx-16 lg:ml-32 text-xs md:text-sm font-inter font-medium text-[#707070] flex flex-row">
            {/* &copy; {new Date().getFullYear()} Sarthak Mohanty. All rights reserved.{' '} */}
            {/* <br /> */}
            {song?.device === "Sarthak\'s AirPods Pro" ?
                <svg className='h-4 mr-2' viewBox="0 0 111 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#707070" d="M36.7812 0.484212C34.5156 0.458171 32.1979 0.822754 29.8281 1.57796C27.4583 2.30713 25.1927 3.43994 23.0312 4.9764C20.8958 6.48682 19.0078 8.40088 17.3672 10.7186C17.0547 11.1613 16.7292 11.63 16.3906 12.1248C16.0781 12.6196 15.7786 13.2056 15.4922 13.8826C18.4349 14.3774 21.1172 15.5103 23.5391 17.2811C25.987 19.0519 27.9401 21.2264 29.3984 23.8045C30.8568 26.3566 31.5859 29.104 31.5859 32.0467C31.5859 34.4946 31.1302 36.7733 30.2188 38.8826C32.6667 38.492 34.75 38.0103 36.4688 37.4373C38.1875 36.8384 39.776 36.1222 41.2344 35.2889C44.5677 33.3358 47.3281 30.8097 49.5156 27.7108C51.7292 24.6118 52.8359 20.9139 52.8359 16.617C52.8359 13.2316 52.1198 10.341 50.6875 7.94515C49.2812 5.54932 47.3672 3.71338 44.9453 2.43734C42.5234 1.1613 39.8021 0.510254 36.7812 0.484212ZM38.9297 17.4764C38.487 17.867 37.9792 18.0363 37.4062 17.9842C36.8333 17.9321 36.3646 17.6717 36 17.203C35.6615 16.7603 35.5182 16.2655 35.5703 15.7186C35.6224 15.1717 35.8698 14.703 36.3125 14.3123L41.8203 9.70296C42.237 9.33838 42.7188 9.18213 43.2656 9.23421C43.8385 9.2863 44.2943 9.54671 44.6328 10.0155C45.0234 10.4582 45.2057 10.953 45.1797 11.4998C45.1536 12.0467 44.9062 12.5024 44.4375 12.867L38.9297 17.4764ZM31 71.1483H34.125C35.4792 71.1483 36.5599 70.7837 37.3672 70.0545C38.1745 69.3514 38.5781 68.3358 38.5781 67.0077V41.1873C36.6771 41.9946 34.737 42.6326 32.7578 43.1014C30.7786 43.5441 28.6953 43.8436 26.5078 43.9998V67.0077C26.5078 68.3358 26.9115 69.3514 27.7188 70.0545C28.5521 70.7837 29.6458 71.1483 31 71.1483ZM74.3203 0.484212C71.3255 0.510254 68.6172 1.1613 66.1953 2.43734C63.7734 3.71338 61.8464 5.54932 60.4141 7.94515C58.9818 10.341 58.2656 13.2316 58.2656 16.617C58.2656 20.9139 59.3724 24.6118 61.5859 27.7108C63.7995 30.8097 66.5599 33.3358 69.8672 35.2889C71.3516 36.1222 72.9401 36.8384 74.6328 37.4373C76.3516 38.0103 78.4479 38.492 80.9219 38.8826C80.0104 36.7733 79.5547 34.4946 79.5547 32.0467C79.5547 29.104 80.2708 26.3566 81.7031 23.8045C83.1615 21.2264 85.1016 19.0519 87.5234 17.2811C89.9714 15.5103 92.6667 14.3774 95.6094 13.8826C95.2969 13.2056 94.9844 12.6196 94.6719 12.1248C94.3854 11.63 94.0859 11.1613 93.7734 10.7186C92.1068 8.40088 90.1927 6.48682 88.0312 4.9764C85.8958 3.43994 83.6432 2.30713 81.2734 1.57796C78.9297 0.822754 76.612 0.458171 74.3203 0.484212ZM72.2109 17.4764L66.6641 12.867C66.2214 12.5024 65.974 12.0467 65.9219 11.4998C65.8958 10.953 66.0651 10.4582 66.4297 10.0155C66.7943 9.54671 67.25 9.2863 67.7969 9.23421C68.3698 9.18213 68.8776 9.33838 69.3203 9.70296L74.8281 14.3123C75.2708 14.703 75.5052 15.1717 75.5312 15.7186C75.5833 16.2655 75.4271 16.7603 75.0625 17.203C74.724 17.6717 74.2682 17.9321 73.6953 17.9842C73.1224 18.0363 72.6276 17.867 72.2109 17.4764ZM80.1016 71.1483C81.4557 71.1483 82.5365 70.7837 83.3438 70.0545C84.1771 69.3514 84.5938 68.3358 84.5938 67.0077V43.9998C82.4062 43.8436 80.3229 43.5441 78.3438 43.1014C76.3646 42.6326 74.4245 41.9946 72.5234 41.1873V67.0077C72.5234 68.3358 72.9271 69.3514 73.7344 70.0545C74.5417 70.7837 75.6224 71.1483 76.9766 71.1483H80.1016ZM15.5703 43.7655C17.7057 43.7655 19.6719 43.3228 21.4688 42.4373C23.2656 41.5519 24.7109 40.2368 25.8047 38.492C26.8984 36.7472 27.4453 34.5988 27.4453 32.0467C27.4453 29.6769 26.7682 27.3983 25.4141 25.2108C24.0859 23.0233 22.276 21.2264 19.9844 19.8202C17.7188 18.4139 15.1797 17.7108 12.3672 17.7108C9.9974 17.7108 7.95312 18.2707 6.23438 19.3905C4.54167 20.4842 3.23958 21.9165 2.32812 23.6873C1.41667 25.4321 0.960938 27.3202 0.960938 29.3514C0.960938 32.1899 1.66406 34.703 3.07031 36.8905C4.47656 39.0519 6.29948 40.7446 8.53906 41.9686C10.7786 43.1665 13.1224 43.7655 15.5703 43.7655ZM13.7734 37.6717C13.1745 38.2186 12.3932 38.2316 11.4297 37.7108C10.4661 37.1899 9.41146 36.2264 8.26562 34.8201C7.09375 33.4139 6.33854 32.216 6 31.2264C5.6875 30.2108 5.83073 29.4556 6.42969 28.9608C7.08073 28.4139 7.875 28.3879 8.8125 28.8827C9.75 29.3774 10.8177 30.341 12.0156 31.7733C13.1354 33.2056 13.8516 34.4165 14.1641 35.4061C14.5026 36.3957 14.3724 37.1509 13.7734 37.6717ZM95.5312 43.7655C97.9792 43.7655 100.323 43.1665 102.562 41.9686C104.802 40.7446 106.625 39.0519 108.031 36.8905C109.438 34.703 110.141 32.1899 110.141 29.3514C110.141 27.3202 109.685 25.4321 108.773 23.6873C107.862 21.9165 106.547 20.4842 104.828 19.3905C103.135 18.2707 101.104 17.7108 98.7344 17.7108C95.9479 17.7108 93.4089 18.4139 91.1172 19.8202C88.8516 21.2264 87.0417 23.0233 85.6875 25.2108C84.3594 27.3983 83.6953 29.6769 83.6953 32.0467C83.6953 34.5988 84.2292 36.7472 85.2969 38.492C86.3906 40.2368 87.8229 41.5519 89.5938 42.4373C91.3906 43.3228 93.3698 43.7655 95.5312 43.7655ZM97.3672 37.6717C96.7422 37.1509 96.5859 36.3957 96.8984 35.4061C97.237 34.4165 97.9792 33.2056 99.125 31.7733C100.297 30.341 101.352 29.3774 102.289 28.8827C103.253 28.3879 104.047 28.4139 104.672 28.9608C105.271 29.4556 105.401 30.2108 105.062 31.2264C104.75 32.216 104.021 33.4139 102.875 34.8201C101.703 36.2264 100.635 37.1899 99.6719 37.7108C98.7344 38.2316 97.9661 38.2186 97.3672 37.6717Z"/>
                </svg>
                :
                <svg className='h-4 mr-2' viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#707070" d="M17.0938 41.4062C22.6276 41.4062 26.6966 40.3776 29.3008 38.3203C31.9049 36.276 33.207 33.0208 33.207 28.5547V13.4375C33.207 12.2786 33.1224 11.2174 32.9531 10.2539C32.7839 9.29036 32.5365 8.41797 32.2109 7.63672C31.8854 6.85547 31.5013 6.16536 31.0586 5.56641C30.7982 5.21484 30.4596 5.01302 30.043 4.96094C29.6393 4.90885 29.2422 5.01302 28.8516 5.27344C28.1484 5.82031 27.1849 6.3151 25.9609 6.75781C24.737 7.1875 23.3568 7.53906 21.8203 7.8125C20.2969 8.07292 18.7214 8.20312 17.0938 8.20312C15.4661 8.20312 13.8841 8.07292 12.3477 7.8125C10.8242 7.53906 9.45052 7.1875 8.22656 6.75781C7.0026 6.3151 6.03906 5.82031 5.33594 5.27344C4.94531 5.01302 4.54818 4.90885 4.14453 4.96094C3.74089 5.01302 3.40234 5.21484 3.12891 5.56641C2.6862 6.16536 2.30208 6.85547 1.97656 7.63672C1.65104 8.41797 1.40365 9.29036 1.23438 10.2539C1.0651 11.2174 0.980469 12.2786 0.980469 13.4375V28.5547C0.980469 33.0208 2.28255 36.276 4.88672 38.3203C7.49089 40.3776 11.5599 41.4062 17.0938 41.4062ZM17.0742 5.50781C18.819 5.50781 20.375 5.40365 21.7422 5.19531C23.1224 4.97396 24.2096 4.67448 25.0039 4.29688C25.8112 3.90625 26.2148 3.47005 26.2148 2.98828C26.2148 2.48047 25.8177 2.03776 25.0234 1.66016C24.2292 1.28255 23.1419 0.989583 21.7617 0.78125C20.3815 0.559896 18.819 0.449219 17.0742 0.449219C15.3424 0.449219 13.793 0.559896 12.4258 0.78125C11.0586 0.989583 9.97786 1.28255 9.18359 1.66016C8.38932 2.03776 7.99219 2.48047 7.99219 2.98828C7.99219 3.47005 8.38932 3.90625 9.18359 4.29688C9.97786 4.67448 11.0586 4.97396 12.4258 5.19531C13.793 5.40365 15.3424 5.50781 17.0742 5.50781Z"/>
                </svg>
            }
            {song?.title ?
                <div><Balancer>Listening to <div className={`inline ${song?.title ? 'font-bold' : ''}`}>{song?.title}</div>{song?.artist ? ` by ${song?.artist} on ${song?.device}.` : ''}</Balancer></div>
            : null}
        </div>
    )
}