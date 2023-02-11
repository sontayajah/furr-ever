import React from 'react'

function SectionHead({ head, subheadFirst, subheadSecond }) {
    return (
        <div className="flex flex-col text-center font-bold">
            <div className="flex gap-2 justify-center mb-2">
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.54285 0.604623C6.97047 0.604623 7.38849 0.73505 7.74404 0.979409C8.09959 1.22377 8.3767 1.57109 8.54035 1.97744C8.70399 2.38379 8.74681 2.83094 8.66338 3.26232C8.57996 3.6937 8.37404 4.08996 8.07167 4.40097C7.7693 4.71198 7.38405 4.92378 6.96465 5.00958C6.54525 5.09539 6.11053 5.05135 5.71547 4.88303C5.3204 4.71472 4.98273 4.42968 4.74516 4.06397C4.50759 3.69826 4.38078 3.2683 4.38078 2.82847C4.38282 2.23931 4.61126 1.67488 5.01629 1.25828C5.42132 0.841686 5.97006 0.606716 6.54285 0.604623ZM6.54285 13.9477C6.11524 13.9477 5.69722 14.0781 5.34167 14.3225C4.98612 14.5668 4.709 14.9142 4.54536 15.3205C4.38172 15.7269 4.3389 16.174 4.42233 16.6054C4.50575 17.0368 4.71167 17.433 5.01404 17.744C5.31641 18.055 5.70165 18.2668 6.12106 18.3527C6.54046 18.4385 6.97518 18.3944 7.37024 18.2261C7.76531 18.0578 8.10298 17.7728 8.34055 17.407C8.57812 17.0413 8.70493 16.6114 8.70493 16.1715C8.70289 15.5824 8.47445 15.018 8.06942 14.6014C7.66439 14.1848 7.11565 13.9498 6.54285 13.9477ZM4.99852 12.3592C4.99852 11.9194 4.87172 11.4894 4.63414 11.1237C4.39657 10.758 4.0589 10.473 3.66384 10.3047C3.26877 10.1364 2.83405 10.0923 2.41465 10.1781C1.99525 10.2639 1.61001 10.4757 1.30763 10.7867C1.00526 11.0977 0.799346 11.494 0.715922 11.9254C0.632498 12.3568 0.675314 12.8039 0.838956 13.2103C1.0026 13.6166 1.27972 13.9639 1.63527 14.2083C1.99082 14.4527 2.40883 14.5831 2.83645 14.5831C3.40924 14.581 3.95799 14.346 4.36301 13.9294C4.76804 13.5128 4.99648 12.9484 4.99852 12.3592ZM4.99852 6.64077C4.99852 6.20094 4.87172 5.77098 4.63414 5.40527C4.39657 5.03956 4.0589 4.75453 3.66384 4.58621C3.26877 4.41789 2.83405 4.37385 2.41465 4.45966C1.99525 4.54547 1.61001 4.75727 1.30763 5.06828C1.00526 5.37929 0.799346 5.77554 0.715922 6.20692C0.632498 6.63831 0.675314 7.08545 0.838956 7.4918C1.0026 7.89816 1.27972 8.24547 1.63527 8.48983C1.99082 8.73419 2.40883 8.86462 2.83645 8.86462C3.40924 8.86253 3.95799 8.62756 4.36301 8.21096C4.76804 7.79436 4.99648 7.22993 4.99852 6.64077ZM9.6933 4.8061C9.52079 5.12897 9.2881 5.41369 9.00853 5.64401C8.72897 5.87432 8.40802 6.0457 8.06403 6.14835C7.35641 6.35701 6.73407 6.79693 6.29104 7.4016C5.84802 8.00628 5.6084 8.74285 5.6084 9.5C5.6084 10.2572 5.84802 10.9937 6.29104 11.5984C6.73407 12.2031 7.35641 12.643 8.06403 12.8517C8.75663 13.0586 9.34202 13.538 9.6933 14.186C10.0199 14.8083 10.5389 15.3007 11.1683 15.5853C11.7977 15.8699 12.5014 15.9304 13.1679 15.7571C13.8345 15.5839 14.4258 15.1869 14.8482 14.629C15.2707 14.071 15.5 13.3841 15.5 12.6769C15.4996 12.2544 15.4183 11.8361 15.2606 11.4459C14.76 10.203 14.7573 8.80704 15.2529 7.56208C15.416 7.17055 15.5001 6.74903 15.5 6.32308C15.5017 5.61525 15.2736 4.92709 14.8518 4.3678C14.43 3.80851 13.8387 3.41013 13.1717 3.23588C12.5047 3.06163 11.8002 3.12149 11.1701 3.40596C10.5399 3.69042 10.0202 4.1832 9.6933 4.8061Z" fill="#E3712D" />
                </svg>
                <p className="text-orange-600">{head}</p>
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M6.54285 0.604623C6.97047 0.604623 7.38849 0.73505 7.74404 0.979409C8.09959 1.22377 8.3767 1.57109 8.54035 1.97744C8.70399 2.38379 8.74681 2.83094 8.66338 3.26232C8.57996 3.6937 8.37404 4.08996 8.07167 4.40097C7.7693 4.71198 7.38405 4.92378 6.96465 5.00958C6.54525 5.09539 6.11053 5.05135 5.71547 4.88303C5.3204 4.71472 4.98273 4.42968 4.74516 4.06397C4.50759 3.69826 4.38078 3.2683 4.38078 2.82847C4.38282 2.23931 4.61126 1.67488 5.01629 1.25828C5.42132 0.841686 5.97006 0.606716 6.54285 0.604623ZM6.54285 13.9477C6.11524 13.9477 5.69722 14.0781 5.34167 14.3225C4.98612 14.5668 4.709 14.9142 4.54536 15.3205C4.38172 15.7269 4.3389 16.174 4.42233 16.6054C4.50575 17.0368 4.71167 17.433 5.01404 17.744C5.31641 18.055 5.70165 18.2668 6.12106 18.3527C6.54046 18.4385 6.97518 18.3944 7.37024 18.2261C7.76531 18.0578 8.10298 17.7728 8.34055 17.407C8.57812 17.0413 8.70493 16.6114 8.70493 16.1715C8.70289 15.5824 8.47445 15.018 8.06942 14.6014C7.66439 14.1848 7.11565 13.9498 6.54285 13.9477ZM4.99852 12.3592C4.99852 11.9194 4.87172 11.4894 4.63414 11.1237C4.39657 10.758 4.0589 10.473 3.66384 10.3047C3.26877 10.1364 2.83405 10.0923 2.41465 10.1781C1.99525 10.2639 1.61001 10.4757 1.30763 10.7867C1.00526 11.0977 0.799346 11.494 0.715922 11.9254C0.632498 12.3568 0.675314 12.8039 0.838956 13.2103C1.0026 13.6166 1.27972 13.9639 1.63527 14.2083C1.99082 14.4527 2.40883 14.5831 2.83645 14.5831C3.40924 14.581 3.95799 14.346 4.36301 13.9294C4.76804 13.5128 4.99648 12.9484 4.99852 12.3592ZM4.99852 6.64077C4.99852 6.20094 4.87172 5.77098 4.63414 5.40527C4.39657 5.03956 4.0589 4.75453 3.66384 4.58621C3.26877 4.41789 2.83405 4.37385 2.41465 4.45966C1.99525 4.54547 1.61001 4.75727 1.30763 5.06828C1.00526 5.37929 0.799346 5.77554 0.715922 6.20692C0.632498 6.63831 0.675314 7.08545 0.838956 7.4918C1.0026 7.89816 1.27972 8.24547 1.63527 8.48983C1.99082 8.73419 2.40883 8.86462 2.83645 8.86462C3.40924 8.86253 3.95799 8.62756 4.36301 8.21096C4.76804 7.79436 4.99648 7.22993 4.99852 6.64077ZM9.6933 4.8061C9.52079 5.12897 9.2881 5.41369 9.00853 5.64401C8.72897 5.87432 8.40802 6.0457 8.06403 6.14835C7.35641 6.35701 6.73407 6.79693 6.29104 7.4016C5.84802 8.00628 5.6084 8.74285 5.6084 9.5C5.6084 10.2572 5.84802 10.9937 6.29104 11.5984C6.73407 12.2031 7.35641 12.643 8.06403 12.8517C8.75663 13.0586 9.34202 13.538 9.6933 14.186C10.0199 14.8083 10.5389 15.3007 11.1683 15.5853C11.7977 15.8699 12.5014 15.9304 13.1679 15.7571C13.8345 15.5839 14.4258 15.1869 14.8482 14.629C15.2707 14.071 15.5 13.3841 15.5 12.6769C15.4996 12.2544 15.4183 11.8361 15.2606 11.4459C14.76 10.203 14.7573 8.80704 15.2529 7.56208C15.416 7.17055 15.5001 6.74903 15.5 6.32308C15.5017 5.61525 15.2736 4.92709 14.8518 4.3678C14.43 3.80851 13.8387 3.41013 13.1717 3.23588C12.5047 3.06163 11.8002 3.12149 11.1701 3.40596C10.5399 3.69042 10.0202 4.1832 9.6933 4.8061Z" fill="#E3712D" />
                </svg>

            </div>
            <p className="text-2xl">{subheadFirst}</p>
            {subheadSecond && <p className="text-2xl">{subheadSecond}</p>}
        </div>
    )
}

export default SectionHead