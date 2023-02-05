import discriminated from "../../docs/safetyAccessibility/discriminated.md"
import incident from "../../docs/safetyAccessibility/incident.md"
import reportIncident from "../../docs/safetyAccessibility/reportIncident.md"
import stickWithMe from "../../docs/safetyAccessibility/stickWithMe.md"

export const ProviderUsingSWMIssues = [{
    id: '202109051236c30e3b-0793-4758-b0b4-27a49d',
    title: 'Using Stick-With-Me (SWM) to share service trips to family and friends',
    desc: discriminated
}]

export const ProviderWasDiscriminatedAgainstIssues = [{
    id: '24911768305d5c762d-b58e-4796-875f-6c2c24',
    title: 'I was discriminated against my client',
    desc: incident
}]

export const ProviderWasInvolvedInAnAccidentIssues = [{
    id: '2697207318d194fb53-90de-4bb6-b507-8c314c',
    title: 'I was involved in an incident',
    desc: reportIncident
}]

export const ProviderReportASeriousIncidentIssues = [{
    id: '78580678765be0baa-f6c1-425b-ba58-046a29',
    title: 'Report a serious incident with a client',
    desc: stickWithMe
}]