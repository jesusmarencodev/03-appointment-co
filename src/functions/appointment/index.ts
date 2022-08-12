import { getPathHandler } from "../libs/getPathHandler";

export default {
  handler: `${getPathHandler(__dirname)}/handler.appointmentHandler`,
  events :[
    {
      sqs: {
        arn: "${ssm:/digital/sqs-co-arn-${self:provider.stage}}",
      }
/*       eventBridge : {
        //colocamos el arn del eventBridge que ya tenemsos creado su nombre es EventBusPracticaAWSServerless01
        eventBus: "arn:aws:events:us-east-1:867855303039:event-bus/EventBusPracticaAWSServerless01",
        pattern:{
          source:["appointment"],
          "detail-type": ["appointment-create-co"]
        }
      } */
    }
  ]
};
