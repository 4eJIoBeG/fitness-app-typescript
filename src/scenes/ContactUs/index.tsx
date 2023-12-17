import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from '@/shared/Htext';

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

	const ContactUs = ({setSelectedPage}: Props) => {

	const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
	const {
		register,
		trigger,
		formState:{errors}
	} = useForm();

	const onSubmit =async (event:any) => {
		const isValid = await trigger();
		if(!isValid) {
			event.preventDefault();
		}
	}

	return (
		<section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
			<motion.div 
				onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div 
					className='md:w-3/5'
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: { opacity: 0, x: -100 },
						visible: { opacity: 1, x: 0 }
					}}
				>
					<Htext>
						<span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
					</Htext>
					<p className='my-5'>
						Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel 
						est tellus quam porttitor. 
						Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor 
						facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
					</p>
				</motion.div>
				
				{/* FORM AND IMAGE */}
				<div className='mt-10 justify-between gap-8 md:flex'>
					<motion.div
						className='mt-10 basis-3/5 md:mt-0'
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						transition={{duration: 0.5}}
						variants={{
							hidden: { opacity: 0, y: -100 },
							visible: { opacity: 1, y: 0 }
						}}
					>
						<form 
							target='_blank'
							onSubmit={onSubmit}
							action='https://formsubmit.co/el/jejeco'
							method='POST'
						>
							<input 
								className={inputStyles}
								type="text"
								placeholder='NAME'
								{...register('name', {
									required:true,
									maxLength:100,
								})}
							/>
							{errors.name && (
								<p className='mt-1 text-primary-500'>
									{errors.name.type === 'required' && 'This field is required!'}
									{errors.name.type === 'maxLength' && 'Max length is 100 chars!'}
								</p>
							)}

							<input 
								className={inputStyles}
								type="text"
								placeholder='EMAIL'
								{...register('email', {
									required:true,
									pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className='mt-1 text-primary-500'>
									{errors.email.type === 'required' && 'This field is required!'}
									{errors.email.type === 'patter' && 'Invalid email address!'}
								</p>
							)}

							<textarea 
								className={inputStyles}
								rows={4}
								cols={50}
								placeholder='MESSAGE'
								{...register('message', {
									required:true,
									maxLength:2000,
								})}
							/>
							{errors.message && (
								<p className='mt-1 text-primary-500'>
									{errors.message.type === 'required' && 'This field is required!'}
									{errors.message.type === 'maxLength' && 'Max length is 2000 chars!'}
								</p>
							)}

							<button
								type='submit'
								className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
							>
								SUBMIT
							</button>
						</form>
					</motion.div>

					<motion.div
						className='relative mt-16 basis-2/5 md:mt-0'
						initial="hidden"
						whileInView="visible"
						viewport={{once: true, amount: 0.5}}
						transition={{duration: 0.5}}
						variants={{
							hidden: { opacity: 0, y: 100 },
							visible: { opacity: 1, y: 0 }
						}}
					>
						<div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
							<img 
								className='w-full'
								src={ContactUsPageGraphic} 
								alt="cointact-us-page-graphic" 
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs