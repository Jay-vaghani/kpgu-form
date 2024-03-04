import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  AndhraPradesh,
  Assam,
  Gujarat,
  Bihar,
  Chhattisgarh,
  DadraAndNagarHaveliDamanDiu,
  Delhi,
  Goa,
  HimachalPradesh,
  JammuKashmir,
  Jharkhand,
  Karnataka,
  Kerala,
  Ladakh,
  Lakshadweep,
  MadhyaPradesh,
  Maharashtra,
  Manipur,
  Meghalaya,
  Mizoram,
  Nagaland,
  Odisha,
  Puducherry,
  Punjab,
  Rajasthan,
  Sikkim,
  TamilNadu,
  Telangana,
  Tripura,
  UttarPrades,
  Uttarakhand,
  WestBengal,
  AndamanNicobar,
  Haryana,
  ArunachalPradesh,
} from "./CityList";

import toast, { Toaster } from "react-hot-toast";

import {
  After10th,
  AfterDiplomaEngineeringD2D,
  AfterGraduation,
  AfterItiC2D,
  Arts12th,
  Commerce12th,
  Science12th,
} from "./CourseList";
import {
  EmailRounded,
  FileUploadRounded,
  LocalPhoneRounded,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

function AdmissionInquiry() {
  const BackendUrl = "https://kpgu-backend.up.railway.app";
  const [loadingState, setLoadingState] = useState(false);

  const [cityList, setCityList] = useState([]);
  const [courseList, setCourseList] = useState([]);

  const [state, setState] = useState("");
  const [coursesAfter, setCoursesAfter] = useState("");

  const year = new Date().getFullYear();

  const StudentCategory = ["OPEN", "SEBC", "SC/ST", "OTHER"];

  const CoursesAfter = [
    "After 10th",
    "After 12th [Science]",
    "After 12th [Commerce]",
    "After 12th [Arts]",
    "After Diploma Engineering. [D2D]",
    "After ITI [C2D]",
    "After Graduation",
  ];

  const State = [
    "Other",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Andaman And Nicobar",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Dadra and Nagar Haveli Daman & Diu",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Lakshadweep",
    "Puducherry",
  ];

  useEffect(() => {
    if (state === "Andhra Pradesh") {
      setCityList([...AndhraPradesh]);
    }
    if (state === "Arunachal Pradesh") {
      setCityList([...ArunachalPradesh]);
    }
    if (state === "Assam") {
      setCityList([...Assam]);
    }
    if (state === "Bihar") {
      setCityList([...Bihar]);
    }
    if (state === "Chhattisgarh") {
      setCityList([...Chhattisgarh]);
    }
    if (state === "Goa") {
      setCityList([...Goa]);
    }
    if (state === "Gujarat") {
      setCityList([...Gujarat]);
    }
    if (state === "Andaman And Nicobar") {
      setCityList([...AndamanNicobar]);
    }
    if (state === "Haryana") {
      setCityList([...Haryana]);
    }
    if (state === "Himachal Pradesh") {
      setCityList([...HimachalPradesh]);
    }
    if (state === "Jharkhand") {
      setCityList([...Jharkhand]);
    }
    if (state === "Karnataka") {
      setCityList([...Karnataka]);
    }
    if (state === "Kerala") {
      setCityList([...Kerala]);
    }
    if (state === "Madhya Pradesh") {
      setCityList([...MadhyaPradesh]);
    }
    if (state === "Maharashtra") {
      setCityList([...Maharashtra]);
    }
    if (state === "Manipur") {
      setCityList([...Manipur]);
    }
    if (state === "Meghalaya") {
      setCityList([...Meghalaya]);
    }
    if (state === "Mizoram") {
      setCityList([...Mizoram]);
    }
    if (state === "Nagaland") {
      setCityList([...Nagaland]);
    }
    if (state === "Odisha") {
      setCityList([...Odisha]);
    }
    if (state === "Punjab") {
      setCityList([...Punjab]);
    }
    if (state === "Rajasthan") {
      setCityList([...Rajasthan]);
    }
    if (state === "Dadra and Nagar Haveli Daman & Diu") {
      setCityList([...DadraAndNagarHaveliDamanDiu]);
    }
    if (state === "Delhi") {
      setCityList([...Delhi]);
    }
    if (state === "Jammu & Kashmir") {
      setCityList([...JammuKashmir]);
    }
    if (state === "Ladakh") {
      setCityList([...Ladakh]);
    }
    if (state === "Sikkim") {
      setCityList([...Sikkim]);
    }
    if (state === "Tamil Nadu") {
      setCityList([...TamilNadu]);
    }
    if (state === "Telangana") {
      setCityList([...Telangana]);
    }
    if (state === "Tripura") {
      setCityList([...Tripura]);
    }
    if (state === "Uttarakhand") {
      setCityList([...Uttarakhand]);
    }
    if (state === "Uttar Pradesh") {
      setCityList([...UttarPrades]);
    }
    if (state === "West Bengal") {
      setCityList([...WestBengal]);
    }
    if (state === "Lakshadweep") {
      setCityList([...Lakshadweep]);
    }
    if (state === "Puducherry") {
      setCityList([...Puducherry]);
    }

    if (coursesAfter === "After 10th") {
      console.log("ok");
      setCourseList([...After10th]);
    }
    if (coursesAfter === "After 12th [Science]") {
      setCourseList([...Science12th]);
    }
    if (coursesAfter === "After 12th [Commerce]") {
      setCourseList([...Commerce12th]);
    }
    if (coursesAfter === "After 12th [Arts]") {
      setCourseList([...Arts12th]);
    }
    if (coursesAfter === "After Diploma Engineering. [D2D]") {
      setCourseList([...AfterDiplomaEngineeringD2D]);
    }
    if (coursesAfter === "After ITI [C2D]") {
      setCourseList([...AfterItiC2D]);
    }
    if (coursesAfter === "After Graduation") {
      setCourseList([...AfterGraduation]);
    }
  }, [state, coursesAfter]);

  // ========================================== React Hook Form Code ==========================================

  const form = useForm();

  const { register, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  const formSummit = async (FormData) => {
    setLoadingState(true);
    const data = await axios
      .post(`${BackendUrl}/student/admission-inquiry`, {
        name: FormData.name,
        email: FormData.email,
        number: FormData.number,
        category: "Null",
        state: FormData.state,
        city: FormData.city,
        CourseAfterOption: FormData.courseAfter,
        CoursesAfterSelected: FormData.courseSelected,
      })
      .then((res) => {
        console.log(res);
        console.log("ok");
        res.data.success === false ? toast.error(res.data.message) : "";
        res.data.success === true ? toast.success(res.data.message) : "";

        setLoadingState(false);
        reset();
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        reset();
      });
  };

  return (
    <>
      <Box
        maxWidth={"1440px"}
        mx={"auto"}
        px={"3%"}
        bgcolor={"#fff"}
        borderRadius={4}
        mt={4}
      >
        <h1
          className="mb-0 fw-bold color-secondary"
          style={{ textAlign: "center" }}
        >
          ADMISSION INQUIRY FOR YEAR {year}-{year + 1}
        </h1>
      </Box>
      <Box maxWidth={"1440px"} mx={"auto"} borderRadius={4} mt={4}>
        <Grid container spacing={3} justifyContent={"center"}>
          {/* <Grid
            item
            xs={12}
            md={5}
            order={{
              xs: 2,
              md: 1,
            }}
          >
            <Box
              bgcolor={"#fff"}
              height={`auto`}
              p={"3%"}
              borderRadius={4}
              className="smooth-shadow"
            >
              <h2 className="display-6 fw-semibold color-secondary">
                For Any Query{" "}
              </h2>
              <Grid container spacing={2} height={"100%"}>
                <Grid item xs={12} sm={4} md={12}>
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    alignItems={{
                      xs: "start",
                      sm: "center",
                    }}
                    p={1}
                    className="smooth-shadow-card"
                    borderRadius={4}
                  >
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/whatsapp-app.svg"
                        width={"120px"}
                        alt=""
                      />
                    </Box>
                    <Box px={1}>
                      <h3 className="text-success fw-semibold">WhatsApp</h3>
                      <Stack gap={1} direction={"row"} flexWrap={"wrap"}>
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<WhatsApp />}
                          href="https://wa.me/7861805306"
                          target="_blank"
                        >
                          <Box
                            display={{
                              xs: "block",
                              sm: "none",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              WhatsApp 1
                            </Typography>
                          </Box>
                          <Box
                            textTransform={"lowercase"}
                            display={{
                              xs: "none",
                              sm: "block",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              7861805306
                            </Typography>
                          </Box>
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<WhatsApp />}
                          href="https://wa.me/7861805208"
                          target="_blank"
                        >
                          <Box
                            display={{
                              xs: "block",
                              sm: "none",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              WhatsApp 2
                            </Typography>
                          </Box>
                          <Box
                            textTransform={"lowercase"}
                            display={{
                              xs: "none",
                              sm: "block",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              7861805208
                            </Typography>
                          </Box>
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4} md={12}>
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    className="smooth-shadow-card"
                    borderRadius={4}
                    alignItems={{
                      xs: "start",
                      sm: "center",
                    }}
                    p={1}
                  >
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/phone.svg"
                        width={"120px"}
                        alt=""
                      />
                    </Box>
                    <Box px={1}>
                      <h3 className="text-primary fw-semibold">Phone</h3>
                      <Stack gap={1} direction={"row"} flexWrap={"wrap"}>
                        <Button
                          variant="contained"
                          color="info"
                          startIcon={<LocalPhoneRounded />}
                          href="tel:7861805306"
                          target="_blank"
                        >
                          <Box
                            display={{
                              xs: "block",
                              sm: "none",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              Phone 1
                            </Typography>
                          </Box>
                          <Box
                            textTransform={"lowercase"}
                            display={{
                              xs: "none",
                              sm: "block",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              7861805306
                            </Typography>
                          </Box>
                        </Button>
                        <Button
                          variant="contained"
                          color="info"
                          startIcon={<LocalPhoneRounded />}
                          href="tel:7861805208"
                          target="_blank"
                        >
                          <Box
                            display={{
                              xs: "block",
                              sm: "none",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              Phone 2
                            </Typography>
                          </Box>
                          <Box
                            textTransform={"lowercase"}
                            display={{
                              xs: "none",
                              sm: "block",
                            }}
                          >
                            <Typography variant="caption" fontSize={"inherit"}>
                              7861805208
                            </Typography>
                          </Box>
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4} md={12}>
                  <Stack
                    direction={{
                      xs: "column",
                      md: "row",
                    }}
                    alignItems={{
                      xs: "start",
                      sm: "center",
                    }}
                    p={1}
                    className="smooth-shadow-card"
                    borderRadius={4}
                    height={"100%"}
                  >
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1706176937/KPGU/Images/Icon-Images/gmail.svg"
                        width={"120px"}
                        alt=""
                      />
                    </Box>
                    <Box px={1}>
                      <h3 className="text-danger fw-semibold">Email</h3>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EmailRounded />}
                        href="mailto:admission@kpgu.ac.in"
                        target="_blank"
                      >
                        <Box
                          display={{
                            xs: "block",
                            sm: "none",
                          }}
                        >
                          Email
                        </Box>
                        <Box
                          textTransform={"lowercase"}
                          display={{
                            xs: "none",
                            sm: "block",
                          }}
                        >
                          admission@kpgu.ac.in
                        </Box>
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid> */}

          <Grid
            item
            xs={12}
            md={7}
            order={{
              xs: 1,
              md: 2,
            }}
          >
            <form onSubmit={handleSubmit(formSummit)}>
              <Box
                p={"3%"}
                bgcolor={"#fff"}
                borderRadius={4}
                className="smooth-shadow"
              >
                <Grid container spacing={2.2}>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <TextField
                        type="text"
                        color="secondary"
                        fullWidth
                        label="Full Name"
                        variant="filled"
                        helperText={errors.name ? errors.name.message : false}
                        error={errors.name ? true : false}
                        id="name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please Enter Your Name",
                          },
                        })}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <TextField
                        type="email"
                        color="secondary"
                        fullWidth
                        label="Email ID"
                        variant="filled"
                        id="email"
                        helperText={errors.email ? errors.email.message : false}
                        error={errors.email ? true : false}
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Please Enter Your Email",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please Enter Valid Email Address",
                          },
                        })}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <TextField
                        type="number"
                        color="secondary"
                        fullWidth
                        label="Contact No"
                        variant="filled"
                        id="number"
                        helperText={
                          errors.number ? errors.number.message : false
                        }
                        error={errors.number ? true : false}
                        {...register("number", {
                          required: {
                            value: true,
                            message: "Please Enter Your Number",
                          },
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Please Enter Valid Phone Number",
                          },
                        })}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <Autocomplete
                        fullWidth
                        onSelect={(e) => setState(e.target.value)}
                        options={State}
                        freeSolo
                        autoComplete
                        renderInput={(params, index) => (
                          <TextField
                            {...params}
                            key={index}
                            variant="filled"
                            color="secondary"
                            label="Select State"
                            id="state"
                            helperText={
                              errors.state ? errors.state.message : false
                            }
                            error={errors.state ? true : false}
                            {...register("state", {
                              required: {
                                value: true,
                                message: "Please Select Your State",
                              },
                            })}
                          />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <Autocomplete
                        fullWidth
                        options={cityList}
                        autoComplete
                        freeSolo
                        disabled={state ? false : true}
                        renderInput={(params, index) => (
                          <TextField
                            {...params}
                            key={index}
                            variant="filled"
                            color="secondary"
                            label="Select City"
                            id="city"
                            helperText={
                              errors.city ? "Please Select Your City" : false
                            }
                            error={errors.city ? true : false}
                            {...register("city", {
                              required: {
                                value: true,
                                message: "Please Select Your City",
                              },
                            })}
                          />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Autocomplete
                        fullWidth
                        onSelect={(e) => setCoursesAfter(e.target.value)}
                        options={CoursesAfter}
                        value={coursesAfter}
                        autoComplete
                        renderInput={(params, index) => (
                          <TextField
                            {...params}
                            key={index}
                            variant="filled"
                            color="secondary"
                            label="Courses After"
                            helperText={
                              errors.courseAfter
                                ? "Please Select Input Filed"
                                : false
                            }
                            error={errors.courseAfter ? true : false}
                            {...register("courseAfter", {
                              required: {
                                value: true,
                                message: "Please Select Input Filed",
                              },
                            })}
                            id="courseAfter"
                          />
                        )}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <Autocomplete
                        fullWidth
                        options={courseList}
                        autoComplete
                        disabled={coursesAfter ? false : true}
                        renderInput={(params, index) => (
                          <TextField
                            {...params}
                            key={index}
                            variant="filled"
                            color="secondary"
                            label="Select Program"
                            helperText={
                              errors.courseSelected
                                ? "Please Select Your Program"
                                : false
                            }
                            error={errors.courseSelected ? true : false}
                            {...register("courseSelected", {
                              required: {
                                value: true,
                                message: "Please Select Your Program",
                              },
                            })}
                            id="courseSelected"
                          />
                        )}
                        name="courseSelected"
                      />
                    </Box>
                    <h5 className="color-secondary fw-bold ">I Allow KPGU To Contact Me.</h5>
                  </Grid>
                  <Grid item xs={12}>
                    <LoadingButton
                      variant="contained"
                      fullWidth
                      color="info"
                      type="submit"
                      loading={loadingState}
                      size="large"
                      endIcon={<FileUploadRounded />}
                    >
                      Submit
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>

      <Toaster />
    </>
  );
}

export default AdmissionInquiry;
