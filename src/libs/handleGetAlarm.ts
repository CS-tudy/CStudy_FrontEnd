export {};
// useEffect(() => {
//   const fetchAlarm = async () => {
//     try {
//       const alarm = await getAlarm();
//       console.log('alarm', alarm.data.content);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchAlarm();
// }, []);

// const handleGetAlarm = (pageNum, event) => {
//     console.log('handleGetAlarm');
//     axios({
//     url: '/api/v1/users/alarm,
//     method: 'GET',
//     headers: {
//     Authorization: 'Bearer ' + localStorage.getItem('token'),

//     function Alarm() {

//     useEffect(() => {

//     handleGetAlarm();

//     eventSource = new EventSource("http://localhost:8080/api/v1/users/alarm/subscribe?token=" + localStorage.getItem('token'));

//     setAlarmEvent(eventSource);

//     eventSource.addEventListener("open", function (event) {
//       console.log("connection opened");
//     });

//     eventSource.addEventListener("alarm", function (event) {
//        console.log(event.data);
//        handleGetAlarm();
//     });

//     eventSource.addEventListener("error", function (event) {
//       console.log(event.target.readyState);
//       if (event.target.readyState === EventSource.CLOSED) {
//         console.log("eventsource closed (" + event.target.readyState + ")");
//       }
//       eventSource.close();
//     });
//     }, []);
