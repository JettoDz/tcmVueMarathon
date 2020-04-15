export default {
  created() {
    console.log("I'm logging, don't mind me");
  },
  data() {
    return {
      myPrivateData: "ciao"
    };
  },
  methods: {
    logNow() {
      console.log("logerinno");
    }
  }
};
