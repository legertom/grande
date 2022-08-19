import React, { useEffect } from "react";

import "./style.css";
import { Dialog, DialogContent , Box,Button,
	CircularProgress,Divider,
	InputAdornment,
	Link,
	TextField,
	Typography,
	useMediaQuery, } from "@mui/material";
import { useRecoilState } from "recoil";
import { signUpModal } from '../../util/modal_state/modalState';

import { useDispatch } from "react-redux";

import { useHistory } from 'react-router';

// import { useGoogleLogin } from 'react-google-login';
// import cn from 'classnames';
// import FacebookLogin from 'react-facebook-login';

// import { removeProduct } from "../../lib/slice/productsSlice";
// import productDetailsState from "../../common/schema/productsSchema";
/**
 * @author
 * @function ProductDetailsPage
 **/

const ProductDetailsPage = (props) => {
  const [isOpen, setOpen] = useRecoilState(signUpModal);
//   const [values, setValues] = useRecoilState(productDetailsState);
  const dispatch = useDispatch();
//   const { id, image, name, price, brand } = values;

  const removeItem = () => {
    // dispatch(removeProduct({ id: id }));
    // setOpen(false);
  };
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
      open={isOpen}
    >
      <DialogContent classes={{ root: "SignUp_dialogContentRoot" }}>
        {/* <div className="productDescriptionContainer"> */}
        <Box className="SignUp_container">
					
						<Box className="SignUp_leftSection">
							<Box color="#ffffff">
								<Typography variant="h3"><strong>{"Grande Medium"}</strong></Typography>
							</Box>
							<Divider className="SignUp_divider" />
							<Box color="#f49600" py={2}>
								{/* <Typography variant="h4" ><strong>{t.setup}</strong></Typography> */}
							</Box>
							<Box color="#ffffff">
								{/* <Typography variant="body1"><strong>{t.description}</strong></Typography> */}
							</Box>
						</Box>
					

					<Box className="SignUp_rightSection">
						<Box pb={3}>
							<Typography style={{ fontWeight: 'bold' }} variant="h3"><strong>{"Create Account"}</strong></Typography>
						</Box>

						<Box className="SignUp_inputFields">
							<Box className="SignUp_inputSections">
								<TextField
									className="SignUp_input"
									id="firstName"
									// onChange={({ target }) => setValue('firstName', target.value)}
									// placeholder={t.firstName}
									autoFocus={true}
									// value={firstName}
									InputProps={{
										classes: {
											input: 'SignUp_inputStyle'
										},
										startAdornment: (
											<InputAdornment position="start">
												{/* <img alt="user" src={userIcon} /> */}
											</InputAdornment>
										),
									}}
									variant="outlined"
								/>

								{/* {errors.firstName && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
											{errors.firstName}
										</Typography>
									</Box>
								)} */}
							</Box>

							<Box className="SignUp_inputSections">
								<TextField
									className="SignUp_input"
									id="lastName"
									// onChange={({ target }) => setValue('lastName', target.value)}
									// placeholder={t.lastName}
									// value={lastName}
									InputProps={{
										classes: {
											input: 'SignUp_inputStyle'
										},
										startAdornment: (
											<InputAdornment position="start">
												{/* <img alt="user" src={userIcon} /> */}
											</InputAdornment>
										),
									}}
									variant="outlined"
								/>

								{/* {errors.lastName && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
											{errors.lastName}
										</Typography>
									</Box>
								)} */}
							</Box>
						</Box>

						<Box className="SignUp_inputSections" width="100%" pb={2}>
							<TextField
								className="SignUp_input"
								id="email"
								// onChange={({ target }) => setValue('email', target.value)}
								// placeholder={t.email}
								// value={email}
								InputProps={{
									classes: {
										input: 'SignUp_inputStyle'
									},
									startAdornment: (
										<InputAdornment position="start">
											{/* <img alt="user" src={emailIcon} /> */}
										</InputAdornment>
									),
								}}
								variant="outlined"
							/>

							{/* {errors.email && (
								<Box color="#ff0000">
									<Typography style={{ color: 'red' }} variant="body2">
										{errors.email}
									</Typography>
								</Box>
							)} */}
						</Box>

						<Box className="SignUp_inputFields">
							<Box className="SignUp_inputSections">
								<TextField
									className="SignUp_input"
									id="password"
									// onChange={({ target }) => setValue('password', target.value)}
									// placeholder={t.password}
									// value={password}
									InputProps={{
										classes: {
											input: 'SignUp_inputStyle'
										},
										startAdornment: (
											<InputAdornment position="start">
												{/* <img alt="user" src={lockIcon} /> */}
											</InputAdornment>
										),
									}}
									type="password"
									variant="outlined"
								/>

								{/* {errors.password && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
											{errors.password}
										</Typography>
									</Box>
								)} */}
							</Box>

							<Box className="SignUp_inputSections">
								<TextField
									className="SignUp_input"
									id="confirmPassword"
									// onChange={({ target }) => setValue('confirmPassword', target.value)}
									// placeholder={t.confirm}
									// value={confirmPassword}
									InputProps={{
										classes: {
											input: 'SignUp_inputStyle'
										},
										startAdornment: (
											<InputAdornment position="start">
												{/* <img alt="user" src={lockIcon} /> */}
											</InputAdornment>
										),
									}}
									type="password"
									variant="outlined"
								/>

								{/* {errors.confirmPassword && (
									<Box color="#ff0000">
										<Typography style={{ color: 'red' }} variant="body2">
											{errors.confirmPassword}
										</Typography>
									</Box>
								)} */}
							</Box>
						</Box>

						{/* {hasSubmitError && (
							<Box color="#ff0000">
								<Typography style={{ color: 'red' }} variant="body2">
									{t.something}
								</Typography>
							</Box>
						)} */}

						<Box py={2} width="100%">
							<Button
								// className={cn("SignUp_button", { isLoading })}
								component="label"
								// disabled={isLoading}
								// onClick={handleSubmit}
								variant="contained"
							>
								{/* {isLoading && <CircularProgress style={{ height: 24, width: 24 }} />}
								{!isLoading && (
									<Typography variant="body1"><strong>{t.create}</strong></Typography>
								)} */}
							</Button>
						</Box>

						<Box
							alignItems="center"
							display="flex"
							justifyContent="space-between"
							width="100%"
						>
							<Divider className="SignUp_dividerOr" />
							<Typography style={{ color: '#000' }} variant="body1">Or</Typography>
							<Divider className="SignUp_dividerOr" />
						</Box>

						<Box py={2} width="100%">
							{/* <Button
								component="label"
								onClick={signIn}
								variant="contained"
								style={{
									backgroundColor: '#ffffff',
									width: '100%',
								}}
							>
								<img alt="google" src={googleIcon} />
							</Button> */}
						</Box>

						<Box pb={2} width="100%">
							{/* <FacebookLogin
								appId="481594196995512"
								autoLoad={false}
								fields="first_name,last_name,email"
								scope="public_profile,email"
								callback={responseFacebook}
								textButton={
									<Typography variant="body1">{t.facebook}</Typography>
								}
								buttonStyle={{
									borderRadius: 4,
									padding: 4,
									width: '100%',
								}}
							/> */}
						</Box>

						<Box py={2}>
							<Typography style={{ color: '#000' }} variant="body2">
								{"Already have an account?"}
								<Link
									// onClick={handleClose}
									style={{ color: '#1fb5fc', cursor: 'pointer' }}
								>
									{'Login'}
								</Link>
							</Typography>
						</Box>


						<Box className="SignUp_footer">
							{/* <Typography style={{ color: '#000' }} variant="caption">
								{t.proceeding}
								<Link
									onClick={() => setOpenPrivacy(true)}
									style={{ color: '#000', cursor: 'pointer' }}
								>
									{t.terms}
								</Link>
							</Typography> */}
						</Box>

					</Box>

					<Box className="SignUp_closeSection">
						{/* <img
							alt="Close"
							onClick={handleClose}
							src={close}
							tag='#'
							height={24}
							width={24}
							style={{ cursor: 'pointer' }}
						/> */}
					</Box>
				</Box>
			
        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsPage;
