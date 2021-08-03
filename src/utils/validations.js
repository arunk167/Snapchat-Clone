import validator from 'is_js';
import { ToastAndroid } from 'react-native';

const checkEmpty = (val, key) => {
	if (validator.empty(val.trim())) {
		
	  return `please Enter ${key}`;
	} else {
		return '';
	}
};

const checkMinLength = (val, minLength, key) => {
	if (val.trim().length < minLength) {
	  return `Please enter valid ${key}`;
	} else {
		return '';
	}
};

export default function (data) {
	let error = '';
	// const {email, firstName, lastName, password, phoneNumber, emailMobile,confirmPassword} = data;
	const {email, date,name, password,Re_password,phoneNumber} = data;
	if (name !== undefined) {
		let emptyValidationText = checkEmpty(name, 'name');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(name, 3, 'name');
			if (minLengthValidation !== '') {
				return minLengthValidation;
			}
		}
	}

	// if (lastName !== undefined) {
	// 	let emptyValidationText = checkEmpty(lastName, 'last name');
	// 	if (emptyValidationText !== '') {
	// 		return emptyValidationText;
	// 	} else {
	// 		let minLengthValidation = checkMinLength(lastName, 3, 'Last name');
	// 		if (minLengthValidation !== '') {
	// 			return minLengthValidation;
	// 		}
	// 	}
	// // }




	// if (date !== undefined) {
	// 	let emptyValidationText = checkEmpty(date, 'date');
	// 	if (emptyValidationText !== '') {
	// 		return emptyValidationText;
	// 	} else {
	// 		if (validator.date(date)) {
	// 			ToastAndroid.showWithGravityAndOffset(`please Valid ${date}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   0,
    //   100
    //   )
	// 			return 'Please enter valid email';
	// 		}
	// 	}
	// }

	if (email !== undefined) {
		let emptyValidationText = checkEmpty(email, 'email');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			if (!validator.email(email)) {
				return `please Enter Valid Email ${email}`;
			}
		}
	}
	

	// // if(emailMobile!==undefined){
	// // 	let emptyValidationText = checkEmpty(emailMobile, 'Email or mobile');
	// // 	if (emptyValidationText !== '') {
	// // 		return emptyValidationText;
	// // 	}
	// // 	if (!/^[0][1-9]$|^[1-9]\d{8,14}$/.test(emailMobile)) {
	// // 		if (!validator.email(emailMobile)) {
	// // 			return 'Please enter valid email or mobile';
	// // 		}
	// // 	}
	// // }

	if (password !== undefined) {
		let emptyValidationText = checkEmpty(password, 'password');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} else {
			let minLengthValidation = checkMinLength(password, 6, 'password');
			if (minLengthValidation !== '') {
				if(Re_password!=undefined){
					// alert()
					return "Password requires minimum 6 characters"
				}
				return "Password is incorrect";
			}
		}
	}
	if (Re_password !== undefined) {
		let emptyValidationText = checkEmpty(Re_password, 'confirmPassword');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		} 
		if(Re_password!=password){
			return `Password and Confirm Password didn't matched`
		}
	}

	if (phoneNumber !== undefined) {
		let emptyValidationText = checkEmpty(phoneNumber, 'phone number');
		if (emptyValidationText !== '') {
			return emptyValidationText;
		}
		if (!/^[0][1-9]$|^[1-9]\d{8,14}$/.test(phoneNumber)) {
			return 'Please enter valid mobile number';
		}
	}

	
}
