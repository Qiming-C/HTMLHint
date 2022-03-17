"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let liftOutput = [];
const jsonFormatter = function (formatter) {
    formatter.on('end', (event) => {
        event.arrAllMessages.forEach((event, index) => {
            event.messages.forEach((m, i) => {
                let liftObj = {
                    type: m.type,
                    message: m.message,
                    file: event.file,
                    line: m.line,
                    details_url: m.rule.link
                };
                liftOutput.push(liftObj);
            });
        });
        console.log(JSON.stringify(liftOutput));
    });
};
module.exports = jsonFormatter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGkvZm9ybWF0dGVycy9qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBVUEsSUFBSSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztBQUdwQyxNQUFNLGFBQWEsR0FBc0IsVUFBVSxTQUFTO0lBQzVELFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFFNUIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUU7WUFHeEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBRTlCLElBQUksT0FBTyxHQUFpQjtvQkFDMUIsSUFBSSxFQUFHLENBQUMsQ0FBQyxJQUFJO29CQUNiLE9BQU8sRUFBRyxDQUFDLENBQUMsT0FBTztvQkFDbkIsSUFBSSxFQUFHLEtBQUssQ0FBQyxJQUFJO29CQUNqQixJQUFJLEVBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQ2IsV0FBVyxFQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDMUIsQ0FBQztnQkFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1FBQ1IsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQTtBQUVGLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIn0=