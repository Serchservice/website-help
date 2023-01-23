import accountUsage from "../../docs/dashboard/manageIssues/accountUsage.md"
import addRemoveAdmins from "../../docs/dashboard/manageIssues/addRemoveAdmins.md"
import howEmployeesJoin from "../../docs/dashboard/manageIssues/howEmployeesJoin.md"
import inviteResend from "../../docs/dashboard/manageIssues/inviteResend.md"
import manageEmployees from "../../docs/dashboard/manageIssues/manageEmployees.md"
import peopleListExport from "../../docs/dashboard/manageIssues/peopleListExport.md"
import problemJoining from "../../docs/dashboard/manageIssues/problemJoining.md"
import seeWhoJoined from "../../docs/dashboard/manageIssues/seeWhoJoined.md"

const BusinessEmployeesManagementIssues = [
    {
        id: '36945436c4978e0b-6e3a-40e7-b703-1ceb20',
        title: 'Managing employees on the business account',
        desc: manageEmployees
    },
    {
        id: '191829164a703b570-0dad-4882-9ef2-b7c124',
        title: 'How employees join the account',
        desc: howEmployeesJoin
    },
    {
        id: '2950399366844428df-6274-4e23-8126-c95f7e',
        title: 'How to see who joined the company account',
        desc: seeWhoJoined
    },
    {
        id: '9105854181dcc77c0-293e-4658-b689-c249e2',
        title: 'Adding and removing coordinators, administrators and request reviewers',
        desc: addRemoveAdmins
    },
    {
        id: '528150357c6e4d93-cc75-4568-81d8-140400',
        title: 'How people use the company account',
        desc: accountUsage
    },
    {
        id: '16384721111c6fd3c1-9fbd-4e2c-963e-333ded',
        title: 'Resending an invite to join the company account',
        desc: inviteResend
    },
    {
        id: '163939039030c5ae9b-8529-4e37-b62f-fbbe94',
        title: 'Someone is having problem joining the account',
        desc: problemJoining
    },
    {
        id: '32368896177ff93681-47e6-4e6d-b535-b615ab',
        title: 'Exporting a list of people on the account',
        desc: peopleListExport
    },
]

export default BusinessEmployeesManagementIssues;