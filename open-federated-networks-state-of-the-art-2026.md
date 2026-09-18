# Open Federated Networks: State of the Art

**Research cutoff: 18 September 2026**  
**Scope:** Internet communication, social software, publishing, collaboration, identity, and adjacent networks.  
**Audience:** Technologists, product teams, community operators, institutional decision-makers, and readers evaluating open alternatives.

## Contents

1. [Executive assessment](#1-executive-assessment)
2. [Definitions, scope, and research method](#2-definitions-scope-and-research-method)
3. [Landscape and ease of adoption](#3-landscape-and-ease-of-adoption)
4. [Email, mailing lists, and asynchronous correspondence](#4-email-mailing-lists-and-asynchronous-correspondence)
5. [Real-time text and community chat](#5-real-time-text-and-community-chat)
6. [Private messaging and encrypted interoperability](#6-private-messaging-and-encrypted-interoperability)
7. [Voice, video, meetings, and live transport](#7-voice-video-meetings-and-live-transport)
8. [Public social networks and social application platforms](#8-public-social-networks-and-social-application-platforms)
9. [Publishing, feeds, newsletters, and podcasts](#9-publishing-feeds-newsletters-and-podcasts)
10. [Forums, communities, events, and specialist networks](#10-forums-communities-events-and-specialist-networks)
11. [Video, images, music, and creator media](#11-video-images-music-and-creator-media)
12. [Calendars, contacts, files, and collaborative work](#12-calendars-contacts-files-and-collaborative-work)
13. [Code collaboration and software distribution](#13-code-collaboration-and-software-distribution)
14. [Identity, authentication, credentials, and institutional data](#14-identity-authentication-credentials-and-institutional-data)
15. [Search, discovery, archives, and content distribution](#15-search-discovery-archives-and-content-distribution)
16. [Commerce, payments, devices, and emerging applications](#16-commerce-payments-devices-and-emerging-applications)
17. [Governance, economics, and effective control](#17-governance-economics-and-effective-control)
18. [Security, privacy, moderation, and bridges](#18-security-privacy-moderation-and-bridges)
19. [Where open technology remains incomplete](#19-where-open-technology-remains-incomplete)
20. [Adoption and procurement guidance](#20-adoption-and-procurement-guidance)
21. [Standards watch and research priorities](#21-standards-watch-and-research-priorities)
22. [Glossary and source guide](#22-glossary-and-source-guide)

## 1. Executive assessment

Open federation is established infrastructure, but its maturity varies sharply by use case. Email demonstrates durable communication across independent providers. Matrix and XMPP offer interoperable messaging. ActivityPub connects a broad family of social applications. AT Protocol combines portable identity, signed public data, and independently implementable aggregation services. IRC remains useful for community chat, although its federation normally stops at the boundary of an individual IRC network.

The central finding of this review is that **open transport, independent operation, and practical user exit are separate achievements**. A system may achieve one and struggle with the others. Standards can make competing implementations possible while hosting costs, discovery, moderation, default applications, or trust directories concentrate effective control.

Several conclusions follow from the evidence developed in the sections below:

- **Choose by interaction model.** Public broadcasting, private group conversation, document collaboration, and institutional data exchange need different consistency, privacy, and trust arrangements. There is no defensible single ranking of all federated protocols.
- **Hosted adoption is usually easier than independent operation.** Joining a service may be straightforward even when running a reliable public server requires substantial expertise and continuing moderation work.
- **Account portability deserves its own evaluation.** Exporting a file, moving followers, preserving an identifier, recovering encryption keys, and restoring a complete working account are different capabilities.
- **The strongest newer approaches separate responsibilities.** Matrix distributes room state; AT Protocol separates data hosting from indexing and presentation; Nostr separates signed identity from relay choice. Each separation introduces different coordination problems.
- **Open technology exists for more use cases than the dominant social platforms suggest.** Calendaring, research identity, podcasts, file sharing, and institutional exchange deserve attention alongside microblogging.
- **The largest gaps increasingly concern application behavior and institutions.** Interoperable permissions, recovery, shared editing, abuse response, discovery, funding, and transactional trust remain harder than defining another message envelope.

“State of the art” here includes both dependable deployed practice and promising work at earlier stages. For example, the IETF's ATP working group provides a standards venue for core AT Protocol components, while its listed documents remain Internet-Drafts. [IETF ATP documents](https://datatracker.ietf.org/wg/atp/documents/).

AT Protocol Spaces opened as a non-production alpha in August 2026. [Spaces alpha announcement](https://atproto.com/blog/atproto-spaces-alpha).

## 2. Definitions, scope, and research method

### 2.1 What counts as open federation?

For this report, an **open federated network** lets independently administered systems exchange useful application data using publicly specified mechanisms, with a realistic route for additional operators or implementations to participate.

This is a working definition, not a claim that every project uses the term identically. It separates several overlapping properties:

| Property | Practical question | What it does not establish |
|---|---|---|
| Open specification | Can another party understand and implement the protocol? | That deployed services will accept the implementation |
| Open-source implementation | Can the software be inspected, modified, and redistributed under its license? | That it interoperates with other installations |
| Federation | Can separately administered services exchange application data? | Unrestricted admission or equal influence |
| Decentralization | Are important functions distributed among independent parties? | Absence of dominant defaults or common dependencies |
| Portability | Can a user or community change providers while preserving useful state? | Preservation of every identifier, relationship, or secret |
| Peer-to-peer operation | Can endpoints communicate or synchronize directly? | Public federation of service providers |
| Permissionless participation | Can a new participant join without approval from a central authority? | A right to be carried, indexed, recommended, or trusted by everyone |
| Open governance | Can affected parties meaningfully influence decisions? | Equal ability to fund implementation or operate infrastructure |

An open network can still block abusive peers. A carefully governed consortium can use open technology while restricting membership. An open-source application can remain an isolated service. These distinctions matter more than the branding attached to a product.

### 2.2 The architectures are materially different

| Architecture | Representative systems | Unit of authority or replication | Main implication |
|---|---|---|---|
| Domain-to-domain delivery | SMTP, XMPP | Domains and addressed recipients | Familiar administration; identities commonly depend on domains |
| Linked servers inside a network | IRC | A cooperating IRC network | Distributed infrastructure does not automatically connect separate networks |
| Replicated conversation state | Matrix | Room events across participating homeservers | Conversations can outlive one participating server; state management is complex |
| Actor inbox delivery | ActivityPub | Actors, objects, and delivered activities | Flexible social interactions; application profiles determine much interoperability |
| Signed repositories plus aggregation | AT Protocol | Account repositories, relays, AppViews | Portable records and global views; aggregators become important operational actors |
| Signed events through chosen relays | Nostr | User keys and events | Identity can survive relay changes; storage and retrieval depend on relay selection |
| Web publishing and subscriptions | HTTP, RSS, Atom, WebSub | Publisher URLs and subscriber choices | Low coupling and inexpensive publishing; limited common social state |
| Explicitly paired replication | Syncthing, local-first applications | Devices and authorized datasets | Strong local ownership; usually no universal public network |
| Institutional trust federation | eduGAIN, OpenID Federation, X-Road | Membership, trust anchors, and organizational policies | Mature cross-organization cooperation with deliberate admission rules |

These are analytical categories. Protocol details and supporting sources appear in the corresponding sections.

### 2.3 Research method and limits

The report draws on primary specifications, standards-body records, official implementation documentation, and first-party project announcements consulted for this September 2026 snapshot. Links appear beside the claims they support. Old foundational standards are included where still relevant; dates on those documents are not treated as evidence of stagnation.

Descriptions of architecture and specification status are factual. Ratings, recommendations, and statements about what a design implies are the author's qualitative synthesis. This is a desk-based review, not a deployment benchmark, security audit, or census of users. Provider usability, regional availability, accessibility, and operating costs can vary substantially.

No aggregate user-count league table is supplied: registered accounts, monthly active users, visible servers, and private deployments measure different things. A count of domains is especially poor evidence of independent control when many domains use the same host, implementation, or discovery service.

The gap analysis means **no broadly established, interoperable solution was identified in the reviewed ecosystem**. It does not claim that no prototype, niche implementation, or private deployment exists anywhere. Adjacent systems are identified explicitly rather than automatically labeled public federation.

## 3. Landscape and ease of adoption

The table is a navigation aid and an assessment, not measured scoring. **Low**, **moderate**, and **high** describe the burden for the stated task. “Operate” means maintaining a reliable, externally reachable service, including updates and abuse handling. “Build” means implementing useful compatibility, not merely parsing a sample message. Existing libraries can reduce implementation effort considerably.

| Family or use case | Join/use | Operate | Build compatible software | Practical position |
|---|---|---|---|---|
| Hosted email | Low | High for dependable public delivery | High for a full mail stack | Established baseline for asynchronous reach |
| IRC on an existing network | Low–moderate | Moderate; network peering is separate | Low–moderate for basic clients | Effective for communities that value lightweight text |
| XMPP | Moderate | Moderate | Moderate–high with modern extensions | Mature federation; feature profiles need attention |
| Matrix | Low–moderate | Moderate–high | High for full encrypted clients or homeservers | Rich persistent chat and organizational communication |
| ActivityPub social applications | Low–moderate | Moderate–high | Moderate–high | Broad application diversity, uneven feature parity |
| AT Protocol / Bluesky-style use | Low through an established app | Moderate for a PDS; high for broad indexing | Moderate with SDKs; high for full infrastructure | Strong public-data portability architecture |
| Nostr | Moderate | Low–moderate for a small relay | Low for a basic client; higher for polished compatibility | Flexible relay choice, significant key and discovery UX |
| RSS/Atom publishing and reading | Low | Low for simple feeds | Low–moderate | One of the easiest routes to open distribution |
| PeerTube and similar media hosting | Low for viewing | High for substantial media workloads | Moderate–high | Operationally real; bandwidth and transcoding dominate |
| CalDAV/CardDAV | Low–moderate | Low–moderate | Moderate | Established personal-data access and synchronization |
| Federated cloud file sharing | Low–moderate | Moderate | Moderate–high across products | Useful deployed sharing; not complete workspace federation |
| Open forge federation | Moderate–high | Moderate–high | High | Partial and emerging beyond Git itself |
| Institutional identity/data federation | Low for enrolled users | High institutional setup | Moderate–high | Mature where membership and trust are organized |
| Open commerce/payment integration | Provider-dependent | High | High | Open specifications coexist with substantial onboarding obligations |

A successful adoption decision should identify who absorbs the difficult work. A managed service, university, cooperative, nonprofit host, or employer can make federation usable without requiring every participant to become a system administrator.

## 4. Email, mailing lists, and asynchronous correspondence

### 4.1 Technology and standards

Email remains the reference case for independently operated services that can contact one another across domains. SMTP supplies mail transfer; message formats and MIME carry content and attachments. Mailbox access is a separate layer: IMAP and JMAP let clients work with a provider's stored data. **JMAP modernizes client access; it does not replace SMTP federation.** [SMTP, RFC 5321](https://www.rfc-editor.org/info/rfc5321/), [IMAP4rev2, RFC 9051](https://www.rfc-editor.org/info/rfc9051/), [JMAP, RFC 8620](https://www.rfc-editor.org/info/rfc8620/).

Modern operation combines several security mechanisms with distinct purposes. DKIM signs messages on behalf of a domain. SPF authorizes sending infrastructure. DMARC evaluates alignment with the visible author domain and publishes handling/reporting policy. These mechanisms address domain authentication and spoofing; they do not encrypt a message or certify its truth. The current DMARC specification is **RFC 9989**, with reporting split into associated documents; treating RFC 7489 as the current normative endpoint would miss the 2026 revision. [DKIM, RFC 6376](https://www.rfc-editor.org/info/rfc6376/), [DMARC, RFC 9989](https://www.rfc-editor.org/info/rfc9989/).

Transport protection also differs from end-to-end protection. MTA-STS can require authenticated TLS for supported server-to-server delivery. OpenPGP provides an open format for encryption and signatures at the content layer; its current major specification is RFC 9580. Deploying TLS does not stop a mailbox provider from accessing unencrypted message content. [MTA-STS, RFC 8461](https://www.rfc-editor.org/info/rfc8461/), [OpenPGP, RFC 9580](https://www.rfc-editor.org/info/rfc9580/).

Other important parts of the modern mail-security stack are:

| Mechanism | Purpose | Limitation |
|---|---|---|
| DANE for SMTP | Authenticate and protect mail transport using DNSSEC-backed TLSA records | Requires the relevant DNS and mail infrastructure; does not encrypt mailbox contents. [RFC 7672](https://www.rfc-editor.org/info/rfc7672/) |
| Authenticated Received Chain (ARC) | Carry earlier authentication assessments through intermediaries | Receivers still decide which intermediaries to trust; RFC 8617 is Experimental, not Standards Track. [RFC 8617](https://www.rfc-editor.org/info/rfc8617/) |
| S/MIME | Sign and encrypt MIME content, providing another open secure-mail approach | Client support, credential distribution, and key management remain necessary. [S/MIME 4.0, RFC 8551](https://www.rfc-editor.org/info/rfc8551/) |

These mechanisms reinforce different layers. None is a universal substitute for the others or a guarantee of successful delivery.

### 4.2 Adoption and operation

For an ordinary user, email has low adoption friction because addresses, clients, invitations, and organizational practices are familiar. For an operator, successful delivery is harder than installing a mail server. DNS configuration, authentication, spam handling, reputation, feedback processing, and incident response all affect whether recipients see a message.

Gmail's sender requirements are a concrete example of this operational layer: they distinguish ordinary and bulk senders and require combinations of authentication, DNS hygiene, TLS, low complaint rates, and unsubscribe functionality. Protocol conformance alone therefore does not establish inbox access. This is evidence of receiver policy shaping interoperability, not a claim that every receiver applies identical rules. [Gmail sender guidelines](https://support.google.com/mail/answer/81126?hl=en).

**Assessment:** using a reputable host with a domain one controls is often a practical compromise. It separates the durable address from the hosting arrangement, while someone else manages delivery operations. The tradeoff is continuing reliance on the registrar, DNS provider, and chosen mail operator.

Mailing lists extend email's reach to group discussion and publishing. They also illustrate semantic friction: forwarding and message rewriting can interact badly with authentication policy, while individual providers make different filtering decisions. The revised DMARC specification explicitly discusses interoperability challenges and leaves final handling decisions to receivers. [DMARC interoperability considerations](https://www.rfc-editor.org/info/rfc9989/).

### 4.3 Governance and remaining gaps

Email's specifications span IETF work and the RFC system; no single email application owns SMTP. Operational authority is distributed among sending domains, receiving providers, network operators, and reputation systems. This produces substantial provider choice alongside strong leverage for large receivers.

The principal unfinished areas are usable end-to-end encryption across ordinary clients, reliable reputation for new independent senders, consistent list behavior, and provider-independent recovery. Address portability is good when a user retains control of a custom domain; it is much weaker for an address under a provider's domain. Mailbox export also does not guarantee preservation of filters, labels, aliases, signatures, or account policy.

## 5. Real-time text and community chat

### 5.1 Matrix: persistent rooms across homeservers

Matrix federates room events among homeservers whose users participate in a conversation. Events form a partially ordered graph, and servers reconcile room state. This differs from delivering every interaction to a single room-hosting service: a room's replicated state is not simply owned by the server whose name appears in an identifier. User accounts, however, remain associated with their homeservers. [Matrix architecture](https://spec.matrix.org/latest/).

This design is valuable for persistent organizational and community conversations spanning administrative boundaries. It also creates engineering work: state resolution, historical events, room upgrades, authorization, media handling, and synchronization are part of building a compatible system.

Matrix supports encrypted rooms using Olm/Megolm mechanisms, device keys, verification, and key management. Encryption is not an automatic property of every Matrix room or every integration. A client must implement the relevant behavior correctly, and users need workable recovery paths. The implementation guidance recommends established cryptographic components rather than implementing the primitives independently. [Matrix encryption guide](https://matrix.org/docs/matrix-concepts/end-to-end-encryption/).

The current specification examined here is **v1.19, released 8 July 2026**. Its additions include encrypted history sharing and standardized key-backup account data. Specification support and deployment support are separate: a feature can be documented before every client and server implements it. [Matrix v1.19 changelog](https://spec.matrix.org/v1.19/changelog/v1.19/).

**Adoption assessment.** An organization can offer a familiar chat experience through a selected client and managed homeserver. Open consumer adoption is less uniform: choosing a host, verifying devices, recovering keys, and navigating differences between clients add friction. Operating a small server is achievable; offering reliable large public rooms, media, moderation, and calls is a more demanding service.

There are multiple server implementations, but they should not be assumed equivalent. The official directory includes Synapse and independent Rust implementations such as Continuwuity and Tuwunel, with differing licenses and maturity. Their presence demonstrates implementation diversity; it does not establish interchangeable performance or feature completeness. [Matrix server directory](https://matrix.org/ecosystem/servers/).

**Governance.** The Matrix.org Foundation is a UK community interest company serving as steward of the specification. Specification changes follow an open proposal process. Its elected Governing Board is advisory to the Guardians, staff, and Spec Core Team; it is not identical to the legal board or a direct vote on every protocol change. Element's role in major implementations and engineering capacity remains a separate practical consideration. [Foundation governance](https://matrix.org/foundation/about/), [Governing Board remit](https://matrix.org/foundation/governing-board/).

**Gaps.** Replicated room history does not itself provide easy user-account migration between domains. A deployment should demonstrate how it preserves identity, memberships, history, encrypted media, and recovery material during a host change. Other priorities include lower-cost operation, consistent encryption UX, robust moderation, and parity across independent implementations.

### 5.2 XMPP: mature domain federation with explicit feature profiles

XMPP uses XML streams for messaging and presence, with domain-based addressing and server-to-server communication. Its core is standardized through IETF RFCs; the XMPP Standards Foundation develops XMPP Extension Protocols, or XEPs. Extensions cover group chat, publish/subscribe, media signaling, and other functionality. Traditional Multi-User Chat rooms are provided by a room service, unlike Matrix's replicated-room model. [XMPP technology overview](https://xmpp.org/about/technology-overview/).

The advantage is a long-established, modular ecosystem. The corresponding adoption problem is deciding which modules constitute a modern experience. “Supports XMPP” is insufficient when users expect reliable mobile delivery, synchronized history, multiple devices, file transfer, calls, and encrypted groups.

The XSF's compliance suites address this by grouping extensions into application profiles. The page reviewed still identifies the 2023 suite as current, despite a September 2026 site build. A deployment should name the actual suite and supported XEP versions, rather than infer compatibility from the calendar year. [XMPP compliance suites](https://xmpp.org/about/compliance-suites/).

OMEMO is the important encrypted-messaging extension to evaluate. **XEP-0384 version 0.9.1, dated 6 April 2026, remains labeled Experimental.** That formal status is compatible with the existence of deployed implementations, but it makes precise version and interoperability checks essential. A mature base protocol does not automatically make every extension final. [OMEMO, XEP-0384](https://xmpp.org/extensions/xep-0384.html).

**Assessment:** XMPP is attractive for organizations or communities willing to select a coherent client/server profile. Its modularity can reduce unnecessary complexity, but moves some integration responsibility to the deployer. Governance is comparatively distributed between IETF core standards, the XSF extension process, implementers, and operators. The main gap is consistency of the complete user experience across independently chosen clients.

### 5.3 IRC: open chat within separately governed networks

IRC's architecture connects servers into a distributed network carrying channels and messages. Its simplicity, extensive client ecosystem, and text-oriented interaction remain useful. Contemporary implementations extend the historical protocol; modern documentation describes deployed behavior rather than pretending that the earliest RFC captures every current feature. [Modern IRC client protocol](https://modern.ircdocs.horse/).

IRCv3 develops backward-compatible extensions to the client protocol. It is a working group of implementers, not a single network operator. Its existence should not be confused with a universal server-to-server federation layer connecting every IRC network. [IRCv3 introduction](https://ircv3.net/).

The important qualification is organizational: joining an IRC network as a user is different from attaching a new server to it. Server linking normally requires the network's cooperation. Accounts, nicknames, channels, moderation, and trust are scoped to that network; separate networks do not automatically interoperate like SMTP domains.

**Assessment:** IRC is an excellent fit for lightweight technical communities with established norms. Modern clients, retained history, and bouncers can improve convenience, but continuity across devices depends on the chosen service and client capabilities. Baseline IRC should not be selected on an assumption of interoperable end-to-end encryption or universal account portability. Its main strengths are understandable interaction, low client complexity, and durable community practice.

### 5.4 Choosing between the three

| Requirement | Matrix | XMPP | IRC |
|---|---|---|---|
| Independently administered domains communicate | Native federation | Native federation | Servers cooperate inside each network; separate networks are distinct |
| Persistent group state | Distributed room-event model | Room-service model, with relevant extensions | Network/channel model; persistence depends on deployment |
| Encrypted messaging | Integrated protocol capabilities; client and room settings matter | Extension-based, notably OMEMO | Not a baseline interoperable capability |
| Implementation challenge | State, synchronization, encryption, and broad APIs | Selecting and integrating a suitable XEP profile | Smaller baseline, with modern extensions to support |
| Good starting use case | Rich organizational/community chat | Standards-oriented messaging with a chosen profile | Lightweight public or technical community chat |

This table summarizes the documented designs above; it is not a performance comparison.

## 6. Private messaging and encrypted interoperability

Public federation and strong private messaging overlap, but neither implies the other. Encryption of content must be evaluated alongside metadata exposure, device enrollment, group membership changes, key recovery, and the delivery infrastructure.

### 6.1 MLS and MIMI solve different layers

**Messaging Layer Security (MLS), RFC 9420**, specifies efficient asynchronous group key establishment with forward secrecy and post-compromise security. It is an important reusable cryptographic foundation. It does not by itself supply contact discovery, a global account namespace, message delivery, spam control, or a complete interoperable messenger. [MLS specification](https://datatracker.ietf.org/doc/rfc9420/).

The IETF's **More Instant Messaging Interoperability (MIMI)** working group addresses the missing application and federation layers: identity, introductions, delivery, content, and room behavior, using MLS for encryption. As of this review, its architecture, content, protocol, and room-policy work is listed as Internet-Drafts. This is active standards work, not proof that arbitrary consumer messaging services now communicate. [MIMI charter](https://datatracker.ietf.org/wg/mimi/about/), [MIMI document status](https://datatracker.ietf.org/wg/mimi/documents/).

### 6.2 Alternative architectures worth distinguishing

| Approach | What exists | Adoption tradeoff | Relationship to federation |
|---|---|---|---|
| Matrix encrypted rooms | Persistent encrypted conversations spanning homeservers | Device verification, recovery, and client compatibility | Directly federated application protocol |
| XMPP with OMEMO | Encrypted direct and group messaging through compatible clients | Extension/version alignment | Encryption layered on domain federation |
| Delta Chat / chatmail | Encrypted messaging with invitation-based contact establishment and independent relay infrastructure | Different onboarding and transport assumptions from conventional email UX | Builds on the email/chatmail ecosystem |
| SimpleX | Messaging without a global user identifier; contacts and groups are held on devices; independently operated servers | Contact establishment and recovery must fit the chosen privacy model | Decentralized relay architecture rather than an email-like directory |
| Briar | Direct synchronization, with Tor online and local mechanisms when offline; optional mailbox support | Availability and device workflow differ from hosted messengers | Primarily peer-to-peer, not public server federation |

Delta Chat's documentation describes QR/invitation-based encrypted contact establishment and recommends chatmail relays for its current private-messaging workflow; conventional unencrypted email remains a separate case. Its private messenger model should not be reduced to “ordinary email with a chat skin.” [Delta Chat FAQ](https://delta.chat/en/help).

SimpleX's distinctive choice is avoiding a global user ID and keeping the social relationship state on devices. Briar emphasizes direct encrypted synchronization and resilience when ordinary Internet access is unavailable. These are different responses to privacy and infrastructure dependence; neither is evidence of transparent interoperability with Matrix, XMPP, or other messenger families. [SimpleX project description](https://simplex.chat/), [Briar architecture](https://briarproject.org/how-it-works/).

### 6.3 Remaining private-messaging problems

The most consequential gaps are a usable cross-service introduction flow, private contact discovery, recoverable multi-device identity, clear group membership semantics, and abuse prevention compatible with encrypted content. Bridging encrypted systems often introduces an endpoint that decrypts messages before forwarding them. A transport bridge therefore cannot be presumed to preserve the original end-to-end trust model.

**Assessment:** use a coherent, supported encrypted ecosystem for present deployments. Follow MIMI for future cross-service interoperability, but evaluate implementation evidence and draft status separately. A shared cryptographic primitive does not make two applications wire-compatible or socially interoperable.

## 7. Voice, video, meetings, and live transport

### 7.1 SIP and WebRTC

SIP is an established session-signaling protocol. It supports locating participants and negotiating sessions, while media transport and deployment policy involve additional components. It can support inter-domain communication, but the fact that two products use SIP internally does not show that their providers permit unrestricted public calling between them. [SIP, RFC 3261](https://www.rfc-editor.org/info/rfc3261/).

WebRTC provides browser-facing real-time communication APIs and an associated protocol ecosystem. It enables interoperable media building blocks without defining a universal meeting service. Applications still need identity, signaling, admission, room policy, moderation, and often media relays or selective forwarding units. Two WebRTC-based products can remain entirely separate networks. [WebRTC Recommendation](https://www.w3.org/TR/webrtc/).

### 7.2 MatrixRTC and application-level federation

Element Call is a concrete implementation of conferencing over Matrix. Its documentation describes MatrixRTC signaling and a LiveKit backend, with end-to-end encrypted calling and integration into Matrix clients. This is useful evidence of a working federated conferencing application; it does not establish compatibility among every application described as “open video conferencing.” [Element Call documentation](https://github.com/element-hq/element-call).

Operationally, conferencing adds a distinct service burden to text chat. Media bandwidth, geographic placement, NAT traversal, relay capacity, and incident handling all matter. Encryption between a client and a media server is different from encryption that excludes the media server from content access. Recording, transcription, and dial-in gateways introduce additional endpoints whose access should be explicit.

For live production, **WHIP, RFC 9725**, standardizes WebRTC ingestion through HTTP. It solves a useful transport integration problem, not audience identity, subscriptions, creator payments, or a federated live-streaming platform. [WHIP specification](https://www.rfc-editor.org/info/rfc9725/).

**Assessment:** basic open media technology is abundant. The major missing layer is a broadly adopted cross-provider meeting experience: reusable identities, invitations, room permissions, moderation, recordings, accessibility features, and predictable encryption behavior. A meeting link that opens the host's application is useful openness of access, but weaker than joining through an independently implemented service.

## 8. Public social networks and social application platforms

### 8.1 The fediverse is an ecosystem, not one protocol

“Fediverse” usually denotes the interconnected social services centered on ActivityPub, but the broader history includes other federation protocols. Mastodon is one application; ActivityPub is a protocol; the fediverse is a network/ecosystem. These names should not be used interchangeably.

Similarly, Bluesky is an application and service built on AT Protocol, while “Atmosphere” is used for the wider AT Protocol ecosystem. Applications built on a shared substrate can still differ in their data schemas, permissions, moderation, and user experience.

The useful question is not simply whether two products “support federation.” It is which identities, content types, and actions travel between them, and what users can do with those objects after they arrive.

### 8.2 ActivityPub: heterogeneous social applications

ActivityPub is a W3C Recommendation defining both server-to-server activity delivery and a client-to-server social API. An actor has inbox and outbox endpoints, and activities use ActivityStreams vocabulary. Implementations may support one side without implementing the other. Supporting ActivityPub federation therefore does not establish compatibility with a universal ActivityPub client. [ActivityPub Recommendation](https://www.w3.org/TR/activitypub/).

Mastodon's implementation documentation supplies additional behavior needed for real interoperability: actor representations, supported activities, extensions, and application-specific conventions. This is typical of the ecosystem: a broad standard provides the substrate, while application profiles determine how much functionality survives between different products. [Mastodon ActivityPub profile](https://docs.joinmastodon.org/spec/activitypub/).

#### What works well

The strongest fit is publicly visible social publishing: following accounts, distributing posts, replying, sharing, and attaching media. Diverse applications can expose a common social surface while retaining their own product model. A video channel, book review, blog post, and discussion community can participate without becoming identical applications.

This diversity is a substantive strength. It allows an organization to host the application appropriate to its content rather than forcing all participation through one timeline product. The following sections examine the specific media, publishing, and community implementations that establish this claim.

#### Where interoperability becomes difficult

An application may understand a delivered object well enough to display it, but lack the action required to use it fully. Showing an event does not guarantee interoperable registration. Showing a discussion post does not guarantee compatible voting or moderation. Delivering an update does not guarantee identical edit histories, notifications, ranking, or search results.

Authentication is also an implementation-sensitive area. Mastodon's current security documentation describes a transition from the older HTTP Signatures draft toward **HTTP Message Signatures, RFC 9421**, while retaining the older form for compatibility. An implementer cannot safely assume that one signature format has already replaced all others across the network. [Mastodon security profile](https://docs.joinmastodon.org/spec/security/).

#### Portability and privacy

Mastodon's documented account move transfers followers when the receiving software supports the Move activity, but **does not move posts**. Other lists can be exported and imported separately. The process depends on creating and linking accounts and using the old account to initiate the move. It is useful migration support, but falls short of restoring the complete original account after its server disappears. [Mastodon account migration](https://docs.joinmastodon.org/user/moving/).

Restricted addressing is not end-to-end encryption. ActivityPub's delivery and authorization model can limit who receives or retrieves an object, but its baseline does not provide a common encrypted private-messaging system. A server that receives readable content becomes part of the trust boundary. [ActivityPub security considerations](https://www.w3.org/TR/activitypub/).

#### Adoption and governance

**Assessment:** hosted use can be easy once a person chooses a server and application. The harder choices concern server longevity, moderation rules, discovery, and the consequences of future migration. Operators need queues, databases, media storage, upgrades, abuse response, and peers that continue to accept their traffic.

ActivityPub's formal standards home is W3C. The Social Web Working Group is again active and is chartered through January 2028; the Social Web Incubator Community Group develops work alongside it. Community proposals and implementation agreements remain important, but their existence does not automatically make them W3C Recommendations. [Social Web Working Group](https://www.w3.org/groups/wg/social/), [Social Web Incubator Community Group](https://www.w3.org/groups/cg/socialcg/).

There is no single fediverse operator that can guarantee delivery or impose a uniform moderation policy. Large applications and large instances can nevertheless exert considerable influence through defaults, compatibility decisions, and blocking. Formal openness and practical influence should both be evaluated.

### 8.3 AT Protocol: portable identity and signed application data

AT Protocol organizes social applications around persistent identifiers, signed repositories, and services that aggregate records. Its main roles are a **Personal Data Server (PDS)** for account hosting, **relays** for collecting update streams, and **AppViews** for application-specific queries and views. Feed generators and labelers provide additional services. Users' readable handles are domain names, while DIDs identify accounts independently of a particular PDS. [AT Protocol overview](https://atproto.com/guides/overview).

| Layer | Main responsibility | Independence question |
|---|---|---|
| Handle and DID resolution | Bind names, keys, and hosting locations | Can the identity be resolved and updated without dependence on one operator? |
| PDS | Host account records and media; expose account services | Can the user migrate and preserve access to records and identity controls? |
| Relay / synchronization | Distribute authenticated repository updates | Can consumers obtain adequate data through independent paths? |
| AppView | Interpret records and serve application queries | Can another provider reproduce the useful application experience? |
| Feeds and labels | Supply ranking and classification | Can users or clients choose alternatives, and which policies are mandatory? |
| Client | Present content and mediate user actions | Which services and defaults does the client actually permit? |

The architectural separation is significant, but the table also shows why hosting one's own PDS is only one part of independence.

#### Signed repositories and migration

Public records live in content-addressed repositories whose commits are signed. Repository exports support backup and migration; binary media blobs are referenced separately. The current repository is mutable: records can be deleted, and the protocol is not an immutable blockchain. A valid signature demonstrates attribution and integrity under the relevant key, not the truth of a post. [AT repository specification](https://atproto.com/specs/repository).

Account hosting and identity are distinct, and an account can migrate between PDS providers. However, a complete exit plan must also preserve blobs, recovery authority, and application-specific state. Downstream services independently decide what accounts and content to carry. Preserving the identity therefore does not force every AppView to display it or restore its previous reach. [AT account lifecycle](https://atproto.com/specs/account).

The protocol supports `did:plc` and a constrained form of `did:web`. The latter depends on continued control of its domain and does not provide recovery from losing that domain. DID Core is a framework; the properties of an actual identity depend on the selected DID method and its operational infrastructure. [AT DID methods](https://atproto.com/specs/did).

**Assessment:** AT Protocol has a particularly explicit design for preserving social references while moving data hosting. This is stronger than treating a downloadable archive as portability. But the quality of the user-facing migration and disaster-recovery workflow must still be demonstrated for the chosen provider and application.

#### Aggregation, indexing, and operating cost

Synchronization combines repository exports with real-time event streams. That enables independent consumers to build views of public records. It also makes respectful handling of deletion and account-status changes an operational requirement; old public snapshots should not be mistaken for a permanently valid representation of an account. [AT synchronization specification](https://atproto.com/specs/sync).

The official self-hosting guide distinguishes the costs clearly: a PDS is relatively approachable; a relay can be bandwidth-intensive; an AppView can be resource-intensive. Relays under Sync 1.1 are **not required to retain archival copies of network data**. A broad index or application view has a different storage burden from a relay. Small or specialized applications need not reproduce every function of the largest social service. [AT self-hosting guidance](https://atproto.com/guides/self-hosting).

The resulting centralization risk is an economic inference: when a product requires broad indexing, fast search, moderation, and popular ranking, economies of scale can favor a few providers even when their interfaces are open. The right test is whether independent replacements are useful and sustainable, not merely technically possible.

#### Moderation and permissioned data

Labels are independently attributable annotations on accounts or content. They provide a protocol mechanism for composable classification and moderation, but applications determine how labels affect user experience. A selectable labeler does not eliminate a host's or AppView's own policies. [AT labels specification](https://atproto.com/specs/label).

The public-repository architecture should now be discussed alongside **AT Protocol Spaces**, announced as an alpha on 20 August 2026. Spaces introduce permissioned repositories and a space authority controlling access. The announcement explicitly says the data is not encrypted and warns against production use. It is meaningful progress toward non-public applications, but should not be presented as production-ready private federation or encrypted messaging. [Spaces alpha design and status](https://atproto.com/blog/atproto-spaces-alpha).

#### Governance in 2026

It is outdated to characterize AT Protocol's entire standards trajectory as internal to Bluesky. The IETF ATP working group was created in 2026 to standardize core public-data repository and synchronization mechanisms. Its charter is deliberately narrower than the complete application stack; the current documents remain drafts. This is a real governance development, not a completed transfer of every AT-related decision to IETF. [ATP charter](https://datatracker.ietf.org/wg/atp/about/), [ATP working-group announcement](https://atproto.com/blog/kicking-off-the-atp-working-group).

Identity governance requires separate attention. Bluesky announced support for an independent Swiss association to operate the PLC directory in September 2025. That announcement describes a transition and should not, by itself, be treated as proof of its completion. In February 2026, the project released independently hostable **PLC read replicas**. Replicas improve availability and provide witnesses to directory behavior; they do not automatically remove the primary directory's role in accepting and ordering updates. [PLC organization announcement](https://atproto.com/blog/plc-directory-org), [PLC read replicas](https://atproto.com/blog/plc-replicas).

**Principal gaps:** affordable independent application infrastructure, well-tested recovery after an uncooperative host disappears, clear governance across all layers, and mature permissioned-data behavior. Growth of applications beyond microblogging makes shared schemas and migration of application-specific state increasingly important.

### 8.4 Nostr: key-based identity and independent relays

Nostr's basic model is signed events published to and retrieved from relays. A user's keypair identifies and authenticates events. Clients can use multiple relays; a relay is not the issuer of the user's identity. This differs from both domain accounts and AT's PDS/repository arrangement. Its core specification defines events and client-relay flows, rather than requiring one globally agreed social database. [Nostr NIP-01](https://github.com/nostr-protocol/nips/blob/master/01.md).

The Nostr Implementation Possibilities process documents optional capabilities. The repository explicitly warns that NIPs are not a checklist every implementation must support. That makes a simple prototype approachable while leaving polished interoperability dependent on compatible choices about event types, discovery, media, moderation, and user interaction. [Nostr NIP repository](https://github.com/nostr-protocol/nips).

Private messaging has additional mechanisms: NIP-17 uses NIP-44 encryption and NIP-59 wrapping, with relay-selection conventions. It is labeled a draft, optional extension. “Nostr supports encrypted messages” is consequently too broad to establish the properties of a particular app or conversation. [NIP-17 private messages](https://github.com/nostr-protocol/nips/blob/master/17.md).

NIP-09 defines deletion requests and explicitly acknowledges that deletion cannot be guaranteed across every relay and client. Key-based identity similarly does not guarantee that all useful records remain available: someone must retain and serve them. [NIP-09 deletion requests](https://github.com/nostr-protocol/nips/blob/master/09.md).

**Assessment:** Nostr offers unusually direct independence from any one relay. The burdens shift toward key custody, recovery, finding appropriate relays, retrieving a coherent history, and choosing clients whose feature sets agree. Switching relays while keeping a key is different from securely changing a compromised identity key. Core Nostr is not a blockchain consensus protocol; particular applications may integrate payment or cryptocurrency systems independently.

Governance is largely an implementer and maintainer process around NIPs, clients, and relays. This can enable quick experimentation but provides less uniformity than a tightly defined application profile. Economic concentration can still arise in widely used clients, discovery services, media hosts, and well-run relays.

### 8.5 Other social federation designs

Diaspora has its own documented federation protocol and implementations, including support in Friendica. It is not simply another name for ActivityPub. Its existence matters when assessing older communities and multi-protocol software, even though shared membership in the broad “federated social” category does not establish native compatibility. [Diaspora federation documentation](https://diaspora.github.io/diaspora_federation/).

Hubzilla is especially relevant to portability: its project documentation describes cloning an online identity to another server, federated authentication, permissions, and several publishing/collaboration functions. These capabilities show that identity continuity and cross-site access have concrete implementations outside the most prominent newer protocols. They do not make all of those capabilities portable through every external protocol that Hubzilla supports. [Hubzilla features](https://hubzilla.org/page/info/home).

### 8.6 Comparative assessment

| Dimension | ActivityPub ecosystem | AT Protocol ecosystem | Nostr ecosystem |
|---|---|---|---|
| Primary design | Actors exchange activities | Accounts publish signed repositories consumed by services | Keys sign events exchanged with selected relays |
| Identity/hosting relationship | Commonly rooted in actor URLs and domains | DID separated from PDS; method-specific dependencies remain | Identity based on key, separate from relay |
| Account movement | Varies; Mastodon moves followers but not posts | Explicit identity-preserving hosting migration | Relay changes can preserve identity; retention and key recovery are separate |
| Discovery | Application and instance dependent | Explicit aggregation and AppView layer | Client, relay, and indexing choices |
| Moderation | Strong role for local operators and federation policy | Hosting policy plus AppViews, clients, and labels | Relay policy plus client and auxiliary services |
| Non-public use | Access restrictions vary; no universal baseline E2EE | Public core; Spaces is an access-controlled alpha | Encrypted-message extensions; app support varies |
| Formalization | W3C Recommendation plus profiles/extensions | Deployed specifications plus scoped IETF work in progress | Community NIPs with differing implementation uptake |
| Likely attraction | Community autonomy and heterogeneous social apps | Portable public records and application development | Identity independent of relay operators |
| Main practical risk | Partial compatibility and domain-bound exit | Dependence on useful aggregators and identity infrastructure | Key handling, data availability, and fragmented feature support |

These are different tradeoffs, not stages along a single inevitable evolutionary path.

## 9. Publishing, feeds, newsletters, and podcasts

### 9.1 The open web remains an important baseline

A website on a controlled domain, linked from other sites and available over HTTP, already offers a substantial degree of publication independence. Adding machine-readable feeds can be simpler and cheaper than joining a richer social federation.

RSS and Atom distribute publication entries to independently chosen readers. RSS 2.0 is maintained through its published specification and extension ecosystem; Atom is an IETF-specified format. They are syndication mechanisms, not complete social networks with common account, reply, moderation, or ranking semantics. [RSS 2.0 specification](https://www.rssboard.org/rss-specification), [Atom, RFC 4287](https://www.rfc-editor.org/info/rfc4287/).

WebSub adds push delivery through hubs, reducing the need to repeatedly poll for updates. Its W3C Recommendation was updated on **2 June 2026**, including security considerations. A hub is a service dependency, but the protocol gives publishers and subscribers a common mechanism rather than binding them to one social application. [WebSub Recommendation](https://www.w3.org/TR/websub/).

The IndieWeb family supplies complementary functions. Webmention lets one site notify another about a mention; Micropub lets independent clients create and edit posts on a user's site. Neither requires that all publishing move to a single platform. The two standards solve different problems and can be combined with ordinary feeds or other federation. [Webmention](https://www.w3.org/TR/webmention/), [Micropub](https://www.w3.org/TR/micropub/).

### 9.2 Publishing software can become a federated actor

The WordPress ActivityPub plugin exposes blog-wide and author profiles that people can follow from compatible services, and supports incoming interaction. This is a useful adoption pattern: federation can extend an existing publication rather than require its audience or editors to abandon the original website. [WordPress ActivityPub plugin](https://wordpress.org/plugins/activitypub/).

Ghost likewise documents social-web distribution alongside websites, RSS, and email newsletters, but its cited help page still labels the feature **Beta**. Product-specific deployment status matters even when the underlying protocol is standardized. [Ghost social-web documentation](https://ghost.org/help/social-web/).

**Assessment:** for writers, institutions, and independent publishers, a controlled domain plus feeds is often the lowest-burden foundation. Federation can add conversation and discovery. Newsletter email adds a familiar delivery channel but inherits mail-delivery constraints and the provider-specific behavior of subscriber management and analytics.

### 9.3 Podcasts demonstrate successful separation of hosting and consumption

Open podcast distribution uses feeds to describe episodes and link media. A listener can choose a reader independently of the publisher's hosting arrangement. Podcasting 2.0 extends RSS through a community-governed namespace, with explicit stages for proposed and formalized tags and an adoption process involving hosts and applications. [Podcast namespace process](https://github.com/Podcastindex-org/podcast-namespace).

This is a strong example of useful interoperability without requiring a universal social graph. Its limits are also instructive: discovery directories, recommendation, advertising, premium access, and listening analytics can still be platform-specific. Moving a feed or maintaining redirects can preserve distribution, while moving subscriptions, payment relationships, or individualized access may require separate mechanisms.

**Gaps:** consistent cross-reader state portability, portable paid access, common interaction semantics, accessible discovery, and creator revenue mechanisms that do not reintroduce one dominant intermediary. Open publication and a sustainable publishing business are related but distinct problems.

## 10. Forums, communities, events, and specialist networks

### 10.1 Group-centered discussion

Lemmy applies ActivityPub to community discussion. Its federation documentation describes communities as Group actors that receive contributions and announce them to followers. This makes the community itself an organizing entity, rather than treating every interaction as a post on an individual's timeline. [Lemmy federation specification](https://join-lemmy.org/docs/contributors/05-federation.html).

PieFed is another federated community-discussion implementation. Its founder-operated instance exposes both local and federated voting modes, illustrating that seemingly simple social actions can have different privacy and propagation semantics. This should be checked in the chosen application rather than assumed from the word “federated.” [PieFed instance information](https://piefed.social/about).

**Assessment:** federation is useful for letting people participate in multiple communities without repeating account creation everywhere. But communities still have hosts, moderators, rules, and state. A surviving user account does not automatically preserve a community when its authoritative host disappears. Community migration, moderator succession, and treatment of removed content deserve explicit recovery plans.

### 10.2 Events and organizing

Mobilizon provides federated community and event management. Its documentation describes cross-instance event registration, multiple identities within an account, privacy settings, and participant roles. This is a meaningful alternative to making every event depend on one commercial social platform. [Mobilizon overview](https://docs.mobilizon.org/about/).

The remaining difficulty is end-to-end workflow. An event listing is only one part of organizing: registration limits, recurring schedules, attendance privacy, ticketing, refunds, venue data, notifications, and calendar updates all need coherent behavior. A remote application that displays an event may still redirect the user to the source for those actions.

### 10.3 Specialist communities

BookWyrm combines reading tracking, reviews, and discovery with federation among its communities and other ActivityPub applications. It demonstrates the value of domain-specific models: books and reading activity need more structure than an undifferentiated status update. [BookWyrm documentation](https://docs.joinbookwyrm.com/).

Usenet/NNTP is an older but important counterpart. NNTP defines a network-news protocol for article exchange and access. It demonstrates longstanding distributed discussion, but its historical deployment claims should not be reused as present-day usage statistics. [NNTP, RFC 3977](https://www.rfc-editor.org/info/rfc3977/).

**Governance and gaps.** These applications inherit some protocol governance from the underlying standard and substantial product governance from their own maintainers. Community operators govern actual participation. Missing or uneven capabilities include portable community ownership, consistent group permissions, interoperable moderation records, common reputation, and compatibility of specialized actions across unlike applications. A shared activity vocabulary is useful, but it does not settle all those behaviors.

## 11. Video, images, music, and creator media

### 11.1 PeerTube and video federation

PeerTube is a deployed video-platform implementation maintained by the nonprofit Framasoft. Individual operators host and moderate their own platforms, which can connect to others. Its current project site also describes a mobile application, an important adoption improvement beyond server-level interoperability. [PeerTube project overview](https://joinpeertube.org/).

Its federation layer shares video metadata and supports social interaction such as comments. Accounts and video channels have distinct ActivityPub representations. The media file and its delivery infrastructure remain separate from those social activities. An ActivityPub-compatible viewer can therefore participate in part of the social experience without itself becoming a complete video-hosting or transcoding service. [PeerTube ActivityPub API](https://docs.joinpeertube.org/api/activitypub).

**Assessment:** independent video distribution is operationally credible, but scale costs money. Storage, transcoding, live delivery, backups, moderation, and bandwidth remain necessary even when discovery and subscriptions federate. Replication can distribute availability and expense; it does not eliminate them.

### 11.2 Audio and other media

Funkwhale provides self-hosted audio publication and libraries, using ActivityPub to share content between pods and other compatible services. It should be evaluated as an audio application with its own data and permissions model, not as a guarantee that any ActivityPub client can reproduce every library or listening feature. [Funkwhale documentation](https://docs.funkwhale.audio/).

Pixelfed provides an open-source implementation focused on photo sharing. As with other media applications, protocol compatibility should be checked separately from upload, albums, video, editing, accessibility, and moderation workflows. The common adoption question is whether a user can preserve an audience and media collection when switching hosts or applications. [Pixelfed repository](https://github.com/pixelfed/pixelfed).

### 11.3 What open media still needs

The most persistent gaps concern discovery at useful scale, subscriptions and entitlements, interoperable playlists and collections, attribution, moderation tooling, and creator income. Rights to distribute a file do not arise from the protocol used to distribute it. Similarly, open technical distribution does not create agreements with artists, studios, sports leagues, or collecting societies.

These constraints should shape project design. A university's public lectures, a community radio archive, and a commercial film service have very different hosting, access, and governance requirements. The strongest existing open tools often serve focused communities well without reproducing the complete business model of the largest media platforms.

## 12. Calendars, contacts, files, and collaborative work

### 12.1 Personal-information standards are useful but not all federation

CalDAV standardizes access to calendar resources; CardDAV standardizes access to contact data. They enable independent clients and servers to work together. This is valuable interoperability, but it should not be confused with a universal server-to-server calendar or social-contact federation. [CalDAV, RFC 4791](https://www.rfc-editor.org/info/rfc4791/), [CardDAV, RFC 6352](https://www.rfc-editor.org/info/rfc6352/).

Calendar invitations across organizations frequently use email transport. iMIP binds iCalendar scheduling messages to Internet mail, providing a concrete bridge between calendaring and the established email network. Client-server synchronization and cross-domain invitation exchange are different layers. [iMIP, RFC 6047](https://www.rfc-editor.org/info/rfc6047/).

**Assessment:** these are good building blocks for personal and organizational independence. Friction tends to appear in shared calendars, delegated administration, resource booking, complex recurrence, tasks, free/busy policy, and provider-specific fields. A successful import proves that data can be read; it does not prove that ongoing collaborative behavior remains equivalent.

### 12.2 Federated file sharing

Nextcloud documents sharing files directly with users on remote installations and mounting remote shares into a local account. This is actual server-to-server application behavior, beyond simply giving someone a public download link. [Nextcloud federation shares](https://docs.nextcloud.com/server/latest/user_manual/en/files/federated_cloud_sharing.html).

Open Cloud Mesh (OCM) is a relevant cross-product specification effort. Its published project page identifies version 1.2.2, provides an API specification, reference stub, and interoperability test suite, and points to a dedicated IETF working group. It should be assessed through supported implementation combinations; an IETF draft is not yet a published RFC. [Open Cloud Mesh specifications](https://cs3org.github.io/OCM-API/).

OCM's charter records deployment since 2016 and distinguishes its share/invite exchange from the actual transfer of data through existing protocols. It also assumes trust relationships established outside the protocol, such as configured allow lists. That is useful managed federation, with a different admission model from an unrestricted public social network. [IETF OCM charter](https://datatracker.ietf.org/wg/ocm/about/).

However, federated file access is a narrower promise than a fully federated office suite. A shared folder does not automatically transfer document comments, real-time editing state, group membership, legal holds, permissions, task assignments, or ownership when the original host disappears.

**Adoption assessment:** ordinary users can have a familiar file-sharing experience when administrators select supported combinations. Cross-product deployment is more demanding: the organization must verify identity mapping, share acceptance, revocation, locking, versioning, and failure behavior. The relevant governance includes product maintainers and operators as well as underlying WebDAV or related specifications.

### 12.3 Local-first collaboration

Automerge is an open synchronization engine for local-first applications, supporting offline changes and consistent merging. Its networking model can use different transports rather than requiring one proprietary service. This is important progress toward durable user ownership of collaborative data. [Automerge architecture](https://automerge.org/).

It is also a component rather than a complete cross-vendor workspace standard. A conflict-free replicated data type can make concurrent edits converge without defining who may edit, what the document means, which schema versions are compatible, or how revocation affects replicas already offline.

Syncthing offers another useful distinction: it synchronizes files between selected devices. That gives users direct control of replicas but does not establish an open network of arbitrary users who can collaborate through a universal document model. [Syncthing operation model](https://docs.syncthing.net/users/syncthing.html).

### 12.4 Solid and the separation of applications from storage

Solid's protocol connects specifications for permissioned access to externally stored data. The published Solid Protocol 0.11.0 document reviewed here is a **Draft Community Group Report**, explicitly not itself a W3C Standard. Meanwhile, the W3C Linked Web Storage Working Group is pursuing standards work that separates storage, identity, access control, and application providers. These two statuses should not be collapsed into either “already a completed W3C standard” or “no formal standards work exists.” [Solid Protocol](https://solidproject.org/TR/protocol), [Linked Web Storage Working Group](https://www.w3.org/groups/wg/lws/).

**Assessment:** separating applications from data custody is a powerful direction. The unresolved adoption challenge is agreement on reusable application schemas and permissions, plus a broad enough set of compatible applications that switching becomes useful in practice.

### 12.5 The office-suite gap

A complete open alternative to a proprietary workspace needs more than email, files, and an editor. It needs interoperable documents, spreadsheets, comments, mentions, presence, tasks, calendars, permissions, search, history, and migration. Open implementations exist for many pieces. The reviewed ecosystem does not establish a broadly deployed standard under which unrelated workspace products exchange the complete live workflow with equivalent semantics.

This is a genuine area for investment: common permission models, document-operation formats, portable collaboration history, shared tests, and recovery after a host or editor vendor disappears.

## 13. Code collaboration and software distribution

### 13.1 Distributed Git does not settle forge independence

Git repositories can be replicated and worked on independently, but a modern forge contains much more than Git objects: issues, review threads, pull requests, project boards, identities, permissions, releases, automation, and packages. Moving the repository alone can leave most of a project's collaboration history and operational workflow behind. Radicle's protocol guide explicitly distinguishes Git's distributed storage from the collaboration layer commonly supplied by centralized forges. [Radicle protocol guide](https://radicle.dev/guides/protocol).

### 13.2 ForgeFed and alternative approaches

ForgeFed extends ActivityPub with vocabulary and interactions for repositories, commits, issues, patches, and related collaboration. Its aim is cross-forge participation without registering a separate account on each site. This is the right problem to target, but a published specification and project goal are not evidence of universal support among existing forges. [ForgeFed overview](https://forgefed.org/).

Forgejo makes the maturity limit concrete: its current configuration documentation labels federation experimental and disables it by default. A deployer should establish which workflows actually work in the selected release rather than infer complete forge federation from the availability of a switch. [Forgejo federation configuration](https://forgejo.org/docs/latest/admin/config-cheat-sheet/#federation-federation).

Radicle takes a peer-to-peer route: nodes replicate Git repositories and associated collaboration artifacts using cryptographic identities and signed data. It is a concrete alternative architecture, not simply another ActivityPub forge profile. Its workflow and availability assumptions differ from a conventional always-online hosting service. [Radicle architecture](https://radicle.dev/guides/protocol).

The AT ecosystem also includes Tangled. Its existence illustrates application diversity; it does not establish universal cross-forge workflow portability. [AT application context](https://atproto.com/blog/atproto-spaces-alpha).

### 13.3 Adoption, governance, and gaps

**Assessment:** teams can already gain substantial independence by keeping complete repository mirrors, portable build definitions, and exports of collaboration data. Adopting a federated forge should still be based on demonstrated workflows: opening issues, reviewing patches, changing permissions, handling spam, and restoring a project after its host is lost.

Forge federation has additional security concerns because content can trigger automation. A remote contribution must not inherit trust merely because it arrived through an authenticated federated actor. Build execution, secrets, package publication, and maintainer approval require explicit boundaries.

Package distribution is another separate layer. Mirroring artifacts is easier than decentralizing trusted package names, ownership transfer, dependency resolution, revocation, and provenance. The missing infrastructure is therefore not just storage. It is portable project governance and supply-chain trust across providers, with maintainable clients and operational incentives.

## 14. Identity, authentication, credentials, and institutional data

### 14.1 Authentication federation is a distinct use case

Identity federation lets a service rely on authentication or attributes supplied by another organization. It does not necessarily give the person a portable account on that service, and it does not mean arbitrary identity providers will be accepted.

OpenID Connect defines an identity layer over OAuth 2.0, allowing clients to obtain authenticated identity information. OAuth's authorization role should not be confused with a complete cross-network identity system. A service may implement an open login protocol while accepting only a small, approved set of providers. [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html).

**OpenID Federation 1.0 became final on 17 February 2026.** It defines mechanisms for multilateral trust federation, including application to OpenID Connect and OAuth. This is an important standards milestone for trust establishment; it does not make membership in every deployment permissionless. [OpenID Federation 1.0](https://openid.net/specs/openid-federation-1_0.html).

eduGAIN is a mature institutional example: it interconnects research and education identity federations, allowing users to access participating services with an identity from their institution. Its value comes from organized trust and membership as much as from protocol mechanics. This is operational federation with a narrower admission model than a public social network. [How eduGAIN works](https://edugain.org/about-edugain/what-is-edugain/).

### 14.2 Identifiers, credentials, and login keys are different

| Mechanism | What it establishes | What remains to be solved |
|---|---|---|
| Domain-based account | A name under an administrative domain | Continuity if the domain is lost or the provider disappears |
| DID | An identifier resolved according to a particular method | Trust in that method, recovery, key changes, application acceptance |
| Verifiable credential | An issuer's cryptographically verifiable claim | Whether the verifier trusts the issuer and accepts the claim |
| OpenID Connect | A login/identity assertion from an accepted provider | Account portability and universal provider acceptance |
| WebAuthn/passkey-style credential | Authentication scoped to a relying party | A universal social identity or migration between unrelated services |

DID Core standardizes an identifier framework, while concrete DID methods define how resolution and control work. Verifiable Credentials Data Model 2.0, a W3C Recommendation since May 2025, defines claims within an issuer–holder–verifier model. Neither standard removes the need for an application to decide which authorities it trusts. [DID Core](https://www.w3.org/TR/did/), [Verifiable Credentials 2.0](https://www.w3.org/TR/vc-data-model-2.0/).

WebAuthn provides public-key authentication credentials scoped to relying parties. It improves authentication without, by itself, turning separate service accounts into one portable identity. [WebAuthn Level 2](https://www.w3.org/TR/webauthn-2/).

**Assessment:** recovery is often the hardest part of identity independence. A provider that can restore access is convenient but powerful; an unrecoverable user-held secret reduces that dependency but creates a different failure mode. Good systems explain this tradeoff and support transitions between devices and custodians without silently changing the user's identity.

### 14.3 Institutional data exchange

X-Road connects organizations through security servers, with central services distributing membership and security configuration. Its architecture explicitly includes certification and timestamping authorities and an operator responsible for the central service. This is distributed data exchange with managed trust, not an ungoverned public network. [X-Road architecture](https://x-road.global/architecture).

The general lesson extends to sector-specific data spaces: data can remain with independent organizations while a shared trust framework determines who may exchange it. Open interfaces do not replace agreements about meaning, authority, retention, access, and accountability.

**Gaps:** low-burden onboarding for smaller institutions, reusable authorization and consent semantics, cross-domain schema alignment, understandable revocation, and switching identity or data providers without breaking organizational relationships. Governance is part of the system's design, not paperwork added after the network works.

## 15. Search, discovery, archives, and content distribution

### 15.1 Discovery can centralize an otherwise open network

A person needs to find accounts, communities, services, and content before protocol openness is useful. Search is difficult because it combines indexing cost, ranking, spam resistance, permissions, and cultural expectations about visibility. A network can have many independent publishers while depending on very few effective directories or indexes.

SearXNG provides an open-source metasearch interface aggregating results from other services. It can improve control over the search interface and reduce dependence on one user-facing search site, but it is not automatically an independently maintained index of the underlying web. This is a concrete example of the difference between an open frontend and independent data infrastructure. [SearXNG documentation](https://docs.searxng.org/).

The same distinction applies within social networks. Replacing a client does not replace its search backend. Running a server does not guarantee that public content is discoverable elsewhere. Federated search must also specify what should not be indexed and how updates, removals, and private objects are handled.

### 15.2 IPFS, BitTorrent, and durable access

IPFS provides open protocols for content addressing, routing, and transfer. It is an important decentralized distribution substrate, but does not itself define a complete social network, moderation system, or guarantee of storage. [IPFS concepts](https://docs.ipfs.tech/concepts/what-is-ipfs/).

Availability requires someone to retain the data. IPFS pinning prevents selected content from being garbage-collected by a retaining node; a content identifier alone does not ensure that an accessible node still has the bytes. Gateways and pinning services can improve convenience while becoming practical dependencies. [IPFS persistence and pinning](https://docs.ipfs.tech/how-to/pin-files/).

BitTorrent distributes files among peers, reducing the origin's burden when many people download the same content. Its open specifications support interoperable implementations. It is a distribution system, not a common identity, access-control, or collaborative editing layer. [BitTorrent BEP 3](https://www.bittorrent.org/beps/bep_0003.html).

### 15.3 Archives create a policy problem as well as a storage problem

Replication improves resilience but complicates correction and withdrawal. An archive may preserve material that its author has deleted from the live network. A valid signature or content hash does not imply continuing consent to publication. Conversely, a community may need durable public records even when one host closes.

**Assessment:** preservation should be designed around the use case. Public research outputs, private chats, public-interest records, and ordinary social posts need different policies. Good open infrastructure distinguishes archival custody from live distribution, supports provenance and correction, and explains where deletion requests can and cannot be enforced.

**Gaps:** sustainable independent indexes, permission-aware discovery, open ranking evaluation, portable subscriptions and search preferences, and funded preservation without compulsory public replication. These are often economic and policy gaps as much as protocol gaps.

## 16. Commerce, payments, devices, and emerging applications

### 16.1 Commerce and transactions

Beckn specifies server-to-server interactions for commerce across platforms, including discovery, ordering, fulfillment, and post-order behavior. It separates consumer-facing applications from service providers, illustrating how federation can extend beyond communication into transactions. A protocol definition, however, should not be used as evidence that every commercial deployment is mutually interoperable or open to unrestricted participation. [Beckn core specifications](https://github.com/beckn/protocol-specifications).

Open Payments defines an API standard for interacting with payment accounts across implementing account-service providers. Its documentation explicitly places deployment at account-servicing entities such as banks and wallet providers. This is open integration at the account interface; the actual transfer, provider participation, and underlying financial arrangements still matter. [Open Payments overview](https://openpayments.dev/overview/getting-started/).

**Assessment:** the missing parts of an open marketplace are not limited to catalogs and checkout messages. Buyers and sellers need identity, reputation, fraud handling, fulfillment, dispute resolution, subscriptions, and sustainable support. A permissionless listing service and a dependable transactional market are different achievements.

For creator networks, portable paid access is particularly important. The ability to move a public profile does not imply that a creator can move recurring payments and entitlements, or that a customer can carry purchases to another compatible application. Open social networks need to integrate with financial infrastructure without making one payment intermediary the new unavoidable gatekeeper.

### 16.2 Devices and automation

MQTT is an OASIS publish/subscribe messaging standard widely used for device communication. Its small clients and low-overhead transport make it valuable infrastructure. But connecting devices to a broker, or bridging brokers, is not by itself an open cross-vendor network with common device semantics, identity, and permission rules. [MQTT overview](https://mqtt.org/).

The adoption barrier shifts from message delivery to understanding what a device can do and who may command it. Home automation, industrial telemetry, and public sensor networks have very different trust boundaries. Open transport should therefore be paired with domain-specific data models and explicit authorization rather than treated as a complete solution.

### 16.3 Agents, games, and other applications

A2A supplies an open protocol for communication between AI agents built by different vendors or frameworks. It is relevant emerging interoperability infrastructure. Its existence does not establish a mature public agent federation with portable identity, trusted discovery, economic settlement, and common abuse handling. [A2A protocol overview](https://a2a-protocol.org/latest/topics/what-is-a2a/).

Games and virtual worlds face a related semantic problem: an identity can move more easily than an inventory, entitlement, achievement, moderation history, or game mechanic. A common transport cannot make incompatible worlds interpret those objects equivalently. For autonomous software, the analogous gap is authority: understanding a request is different from being permitted to act on it.

These adjacent areas are included to mark the boundary of the research. They show promising reusable pieces, but should not be represented as having the deployment maturity of email or institutional identity federation.

## 17. Governance, economics, and effective control

### 17.1 Governance has several independent layers

“Who governs the protocol?” is only the first question. A useful assessment separates the following:

| Layer | Decisions made there | Evidence to examine |
|---|---|---|
| Specification | Formats, semantics, compatibility, change process | Charter, document status, issue process, decision records |
| Implementation | Features, security fixes, releases, licensing | Maintainers, contribution process, release practice, funding |
| Infrastructure | Admission, uptime, quotas, indexing, routing | Operator diversity, deployment cost, replacement options |
| Identity and trust | Names, keys, directory updates, recovery | Registry or method rules, trust anchors, recovery powers |
| Community | Moderation, appeals, discovery norms, acceptable use | Published rules, accountability, staffing, appeal processes |
| Economics | Who pays and what gets subsidized | Revenue model, grants, contracts, concentration of engineering effort |

The power to reject a specification change is different from the power to remove a user from an index. The ability to fork source code is different from the ability to replace the operated service. A nonprofit steward can reduce some risks without ensuring diverse infrastructure or sustainable funding.

### 17.2 Governance models in the reviewed landscape

| Family | Formal or community specification home | Important operational authority |
|---|---|---|
| Email and SIP | IETF/RFC standards ecosystem | Domain operators, carriers/providers, receiver policy |
| XMPP | IETF core plus XSF extensions | Server operators and clients' chosen XEP profiles |
| IRC | Historical RFCs, implementation practice, IRCv3 | Individual IRC network administrators |
| Matrix | Foundation and specification-change process | Homeservers, room administration, major implementations |
| ActivityPub | W3C, with incubator and implementation work | Independent instances and influential application profiles |
| AT Protocol | Published ecosystem specifications; scoped IETF ATP work | PDSs, directory infrastructure, relays, AppViews, clients |
| Nostr | NIP maintainers and independent implementers | Clients, relays, discovery and media services |
| RSS/podcasts | RSS specification and community extensions; IETF Atom | Publishers, directories, readers, hosting providers |
| OpenID/education federation | OpenID specifications and institutional trust frameworks | Federation operators, identity providers, participating services |
| Solid/LWS and OCM | Community specifications and active standards work | Storage operators and compatible application implementations |

This table synthesizes the primary governance and specification sources cited in the family sections. It deliberately avoids treating all “open” processes as institutionally identical.

### 17.3 The difference between formal and effective decentralization

At least six kinds of concentration can survive an open protocol:

1. **Identity concentration:** one directory, registrar, or recovery service remains difficult to replace.
2. **Hosting concentration:** many nominally independent domains use the same infrastructure provider.
3. **Implementation concentration:** most operators depend on one codebase and its release priorities.
4. **Discovery concentration:** one index or client determines what most users can find.
5. **Moderation concentration:** a dominant classification or blocklist service becomes difficult to contest.
6. **Funding concentration:** one organization pays for the engineering that determines practical compatibility.

These are analytical risks to investigate, not claims that every reviewed network exhibits all six. Better measurements would report provider and implementation diversity, replacement cost, failure impact, and user switching success, alongside account and server counts.

The same assessment should include underlying dependencies: DNS, certificates, cloud infrastructure, mobile push, app distribution, and payment processing. Federation at the application layer does not replace those services. RFC 9518 offers a useful discussion of how technical standards interact with non-technical centralization pressures; it is an Informational Independent Stream RFC, not an Internet Standard. [Centralization, Decentralization, and Internet Standards](https://www.rfc-editor.org/info/rfc9518/).

### 17.4 Sustainable operation is part of openness

Federated services incur recurring costs: compute, storage, traffic, security work, moderation, legal/administrative support, user assistance, and backups. The relevant comparison is the total service obligation, not the price of a minimal virtual machine.

Donations, memberships, commercial hosting, cooperative ownership, public procurement, grants, and institutional sponsorship can all support open networks. Each has failure modes. Grants can fund creation without maintenance; volunteer hosting can conceal unpaid labor; a commercial sponsor can become indispensable; an institution can withdraw support.

**Assessment:** a network is more resilient when multiple organizations can fund competent operation and when ordinary users can change providers without losing essential relationships. Sustainable small providers, shared operational tooling, and repeatable migration are therefore as consequential as protocol novelty.

## 18. Security, privacy, moderation, and bridges

### 18.1 Four properties that should not be conflated

| Property | What it answers | Common mistaken inference |
|---|---|---|
| Transport encryption | Can a network observer read a particular connection? | “The service operator cannot read the message.” |
| End-to-end encryption | Which endpoints hold keys to the content? | “No metadata is exposed and recovery is automatic.” |
| Authenticity/integrity | Can data be attributed to a key or checked for alteration? | “The content is true, benign, or authorized for every action.” |
| Access control | Which parties may fetch or receive data? | “An authorized recipient cannot copy or disclose it.” |

These distinctions explain much of the apparent disagreement between protocol communities. Public social systems optimize for distribution and recombination. Private messengers optimize for restricted readership and protected conversations. Institutional networks optimize for authenticated, accountable exchange among accepted parties.

Matrix's client-server specification makes encryption an explicit module with device and key-management behavior. AT's public repositories make verification and redistribution central. Spaces adds access restrictions without content encryption. Nostr's private-message extensions differ from its public signed-event model. None of these designs can be evaluated simply by asking whether it “uses cryptography.” [Matrix client-server specification](https://spec.matrix.org/latest/client-server-api/), [AT repository model](https://atproto.com/specs/repository), [Spaces security distinction](https://atproto.com/blog/atproto-spaces-alpha), [Nostr private-message design](https://github.com/nostr-protocol/nips/blob/master/17.md).

### 18.2 Threats change with architecture

Federation exposes operators to untrusted peers. Plausible concerns include malformed data, replay, impersonation, excessive fetching, amplification, spam, abusive media, and malicious application payloads. The distribution of responsibility differs: some checks belong to transport, some to the application, and some to the final user interface.

**Analysis:** independent operators need bounded resource consumption and clear authorization rules. A signed object should still be treated as untrusted input. A remote URL should not acquire permission to reach internal services. A new server should not be able to impose unlimited storage or processing costs merely by speaking a valid protocol. Public specifications help implementers agree on these boundaries, but operational defaults and conformance tests determine whether the agreement holds.

For private conversations, metadata remains important. Servers may still learn connection timing, routing, account relationships, room membership, or message sizes, depending on the design. Retention, push notifications, backups, and bridges can introduce additional observers. Security comparisons should identify adversaries and endpoints rather than issue a context-free “most secure protocol” ranking.

### 18.3 Moderation is a distributed service problem

An open network still needs ways to report abuse, reduce exposure, manage malicious peers, and appeal mistakes. Local moderation has advantages: communities can set rules appropriate to their needs. It also creates duplication of effort and inconsistent responses across operators.

The main tradeoffs include:

- **Local authority versus shared intelligence.** Shared signals reduce repeated work but can propagate errors or concentrate power.
- **User choice versus safe defaults.** Configurability matters, but many users rely on the initial client and provider settings.
- **Federation reach versus containment.** Blocking an abusive server can protect a community while severing legitimate relationships.
- **Public evidence versus privacy.** Explaining a moderation decision may expose victims or private context.
- **Encrypted content versus centralized inspection.** Abuse handling must work with the actual trust model rather than assume universal server visibility.

A practical open moderation ecosystem needs interoperable reporting where appropriate, well-defined evidence handling, accountable lists or labelers, and review processes. It also needs people with time to do the work. Machine-readable policies alone cannot resolve value conflicts among communities.

### 18.4 Deletion, revocation, and copying

Deletion has several meanings: removing an item from its origin, telling peers to stop distributing it, hiding it in a client, destroying a key, or deleting all accessible copies. These are not equivalent. A public or authorized recipient can retain data outside the protocol's control.

Nostr states this limitation explicitly in its deletion-request specification. AT's synchronization guidance asks mirrors to respect current state and discourages public redistribution of static snapshots that ignore later changes. The design goal should be honest, well-supported propagation of changes, not an impossible guarantee that readable data was never copied. [Nostr deletion semantics](https://github.com/nostr-protocol/nips/blob/master/09.md), [AT mirror behavior](https://atproto.com/specs/sync).

### 18.5 Bridges are useful but introduce their own authority

Bridgy Fed connects ActivityPub, the web, and the AT ecosystem, supporting cross-network follows and interactions. Its documentation also notes conversion limits and the possibility of duplicate representations when multiple bridges overlap. This is evidence both of useful interoperability and of the semantic work a bridge must perform. [Bridgy Fed documentation](https://fed.brid.gy/docs).

A bridge may map identities, store credentials, translate content, choose where to publish, and mediate deletions or blocks. It can become an availability dependency and a new point of policy enforcement. For encrypted chat, a bridge that decrypts content is an endpoint in the security model.

**Assessment:** bridges are valuable migration and reach tools when their behavior is explicit. They should not be described as making two protocols natively equivalent. User expectations about visibility, consent, attribution, edit propagation, and private messages should survive translation—or the product should explain where they do not.

## 19. Where open technology remains incomplete

The gaps below are a synthesis of the reviewed evidence. “Missing” usually means that existing pieces do not yet form a broadly deployed, interoperable, usable system. The kind of gap matters: a new wire protocol will not solve an unfunded moderation team or a missing rights agreement.

| Gap | Existing foundations | What remains incomplete | Predominant problem |
|---|---|---|---|
| Complete user exit | Exports, custom domains, AT migration, Mastodon moves, Hubzilla cloning | Reliable transfer of identity, relationships, content, media, secrets, and app state after host failure | Implementation, UX, and protocol coordination |
| Community and organizational exit | Backups, room replication, group actors, repository mirrors | Moving ownership, moderation, permissions, shared history, and public references together | Shared-state semantics and governance |
| Encrypted cross-service messaging | MLS, Matrix, OMEMO, MIMI drafts | Discovery, introduction, delivery, group policy, recovery, and broad deployed compatibility | Standards completion and adoption |
| Federated live office collaboration | File sharing, OCM, CRDTs, Solid/LWS | Common documents, operations, permissions, comments, history, and schema evolution | Application interoperability |
| Private data across social apps | Access controls, encrypted messaging, Spaces alpha | Consistent audience models, revocation, selective sharing, and stable client support | Privacy architecture and usable implementation |
| Independent search and ranking | Feeds, public data streams, metasearch, specialist indexes | Sustainable indexes with appropriate consent, quality, and spam resistance | Economics and governance |
| Portable paid relationships | Payment APIs, feeds, commerce specifications | Cross-provider subscriptions, purchases, entitlements, refunds, and identity continuity | Business coordination and transaction semantics |
| Open moderation infrastructure | Local tools, labels, reports, shared lists | Accountable cross-service signals, appeals, multilingual capacity, and sustainable staffing | Institutional and operational |
| Low-cost reliable hosting | Packaged servers, managed hosts, open libraries | Routine upgrades, recovery, deliverability, media scaling, and competent support | Operations and funding |
| Broad implementation parity | Public specifications, suites, test projects | Supported profiles, conformance evidence, reproducible cross-vendor testing | Engineering coordination |
| Privacy-preserving discovery | Invitation links, limited directories, device-held contacts | Finding intended people across providers without building a surveillance directory | Research and UX |
| Durable identity with usable recovery | Domains, DIDs, keys, identity federations | Recovery without avoidable lock-in, impersonation, or irreversible key-loss failure | Trust design |
| Federated project development | Git, ForgeFed, Radicle, AT-based applications | Complete cross-forge reviews, permissions, automation, and package trust | Product maturity and supply-chain semantics |
| Rich transactional verticals | Event, book, media, and commerce schemas | Widely shared domain models for jobs, rentals, tickets, professional services, and reputation | Semantics, incentives, and trust |

### 19.1 Portability should be specified as a set of guarantees

The word “portable” is too ambiguous to be a procurement requirement. A useful design should separately address:

1. **Identifier continuity:** whether existing references still identify the same account.
2. **Relationship continuity:** whether followers, contacts, memberships, and permissions survive.
3. **Content continuity:** whether old objects, attachments, and references remain available.
4. **Private-state continuity:** whether settings, drafts, blocks, tokens, and encryption material survive appropriately.
5. **Operational continuity:** whether the account works while migration occurs and after the old host is gone.
6. **Recovery authority:** who can initiate the move, including when the original provider is uncooperative.

This framing also reveals why a universal portability format is difficult: applications do not all possess the same kinds of state. A more achievable direction is a shared minimum lifecycle plus domain-specific transfer formats and verifiable recovery procedures.

### 19.2 Shared semantics are often the limiting factor

Successful byte transfer is the first level of interoperability. Higher levels include agreeing what the object means, which actions are allowed, which state is authoritative, and how conflicting updates are resolved.

For example, a public event announcement, a confirmed registration, a paid ticket, and proof of attendance are related but distinct objects. A job advertisement differs from an application containing sensitive personal information. A book review differs from licensed access to the book. Treating each as an ordinary post can provide a useful public preview while leaving the actual workflow centralized.

This suggests that many next-generation efforts should focus on well-defined vertical profiles and reference implementations, rather than expecting a highly generic activity vocabulary to guarantee full product interoperability.

### 19.3 What cannot be solved by a protocol alone

Several limitations are structural:

- A protocol cannot force an unwilling operator to carry content or grant access to its users.
- It cannot guarantee erasure of plaintext already copied by an authorized or public recipient.
- It cannot provide storage, bandwidth, or human moderation without someone supplying resources.
- It cannot turn a cryptographic identity into universally trusted reputation.
- It cannot create a common understanding of incompatible application objects without semantic agreement.
- It cannot make an open-source fork instantly inherit a service's audience, staffing, or operating budget.

Recognizing these limits is not an argument against federation. It helps direct investment toward mechanisms that can actually improve independence: recoverable identity, affordable substitutes, explicit permissions, open operational tooling, and institutions users can hold accountable.

## 20. Adoption and procurement guidance

### 20.1 Start with the use case and the desired exit

| Need | Sensible starting point | Main acceptance criterion |
|---|---|---|
| Broad asynchronous communication | Hosted email with controlled domain where feasible | Delivery reliability and a tested provider change |
| Lightweight established community chat | IRC | Client access, continuity, moderation, and network policy |
| Rich organizational chat across domains | Matrix | Required clients, encryption/recovery, calls, and operating support |
| Modular standards-based messaging | XMPP with an explicit feature profile | Demonstrated compatibility across selected clients and servers |
| Public community social presence | An appropriate ActivityPub application | Content/action compatibility and realistic migration limits |
| Portable public-data application | AT Protocol | PDS migration, independent data access, and viable application services |
| Key-based public identity across relays | Nostr | Usable key recovery, relay diversity, and required NIP support |
| Independent publication | Controlled website plus RSS/Atom; optional federation | Stable URLs, feed continuity, and sustainable hosting |
| Independent video/audio | PeerTube/Funkwhale or another suitable application | Media delivery budget, moderation, discovery, and preservation |
| Calendars, contacts, and files | CalDAV/CardDAV plus supported file-sharing federation | Data fidelity, permissions, cross-provider operations, and recovery |
| Research or institutional access | Established identity federation | Membership, trust, attribute policy, and ongoing support |
| Experimental richer federation | MIMI, Spaces, ForgeFed, Solid/LWS, or relevant pilots | A bounded pilot with explicit maturity and compatibility targets |

These are conditional recommendations derived from the preceding sections, not claims that one product is best for every user in a category.

### 20.2 Demonstrate independence rather than accepting a label

For a meaningful pilot, have two independently administered services perform the actual user workflow. Include an alternative client or implementation when that is part of the requirement. Then exercise migration, an unavailable peer, an update or deletion, and recovery from an ordinary failure.

The point is to answer concrete questions: Can users find one another? Does the intended action work? Which party can read the data? What remains if one provider leaves? How much staff effort is required to keep the service reliable? A working demonstration is more informative than a long list of supported protocols.

### 20.3 Make organizational requirements explicit

Institutions should specify accessibility, localization, device support, identity integration, retention behavior, support ownership, and the intended scope of federation. A closed deployment using an open protocol may be entirely appropriate, but it should not be counted as participation in a public open network unless it actually permits the relevant interconnection.

For community adoption, explain the provider choice in ordinary language: who runs the service, which rules apply, what happens if it closes, and what can move elsewhere. Users should not need to understand every protocol component before deciding whether to join.

### 20.4 Fund the capability that removes the dependency

If the bottleneck is hosting cost, another client is unlikely to solve it. If it is search, a new PDS implementation may help little. If it is poor migration, documentation without recovery tooling is insufficient. If it is moderation capacity, adding new content types can increase the burden.

**Assessment:** the most useful investment often targets an unglamorous shared service: a conformance suite, reliable backup and restore, a second maintained implementation, accessible onboarding, or sustainable hosting and moderation. These make an open protocol materially easier to adopt and harder to capture.

## 21. Standards watch and research priorities

### 21.1 Selected status checkpoints

These checkpoints are deliberately specific. A dated release, a final specification, an active working group, and an alpha implementation are different kinds of evidence.

| Work | Verified status at the research cutoff | Consequence |
|---|---|---|
| DMARC | RFC 9989 supersedes the older core specification | Update standards references and implementation planning. [RFC record](https://www.rfc-editor.org/info/rfc9989/) |
| Matrix | v1.19 released 8 July 2026 | Distinguish current spec features from support in deployed software. [Changelog](https://spec.matrix.org/v1.19/changelog/v1.19/) |
| OMEMO | XEP-0384 v0.9.1 remains Experimental | Name the implemented version and test client compatibility. [XEP status](https://xmpp.org/extensions/xep-0384.html) |
| Social Web | W3C working group active, chartered to January 2028 | Track maintenance and new deliverables; do not treat incubation as a Recommendation. [Group status](https://www.w3.org/groups/wg/social/) |
| WebSub | Updated Recommendation dated 2 June 2026 | Older publication dates do not capture current maintenance. [Recommendation](https://www.w3.org/TR/websub/) |
| ATP | IETF working group active; repository/synchronization documents remain drafts | Standards governance is developing; the complete stack is not an IETF standard. [Document list](https://datatracker.ietf.org/wg/atp/documents/) |
| AT Spaces | Non-production alpha, August 2026 | Evaluate as emerging access-controlled data support, not encrypted production infrastructure. [Announcement](https://atproto.com/blog/atproto-spaces-alpha) |
| PLC resilience | Read-replica implementation released February 2026 | Auditability and read availability improve; distinguish them from write authority. [Replica design](https://atproto.com/blog/plc-replicas) |
| MIMI | Architecture, content, protocol, and room policy are Internet-Drafts | Watch implementations and interoperability evidence alongside specifications. [Document list](https://datatracker.ietf.org/wg/mimi/documents/) |
| OpenID Federation | Final 1.0 specification, February 2026 | A concrete basis for multilateral identity trust deployments. [Specification](https://openid.net/specs/openid-federation-1_0.html) |
| Open Cloud Mesh | Published project specification and IETF work | Check actual product combinations and draft maturity. [Project specification](https://cs3org.github.io/OCM-API/) |
| Forgejo federation | Experimental and disabled by default in cited documentation | Pilot supported workflows before relying on cross-forge collaboration. [Configuration](https://forgejo.org/docs/latest/admin/config-cheat-sheet/#federation-federation) |
| Solid/LWS | Solid community specification plus active W3C Linked Web Storage work | Follow the correct standards track and application compatibility. [LWS group](https://www.w3.org/groups/wg/lws/) |

### 21.2 What would constitute stronger evidence of progress?

The following research outputs would make future comparisons substantially more useful:

1. **Migration studies:** success rates and losses when real users change providers, including recovery after sudden shutdown.
2. **Implementation interoperability results:** independently maintained software passing shared tests for complete workflows.
3. **Operating-cost studies:** comparable workloads, media volumes, moderation demands, and staff time across deployment sizes.
4. **Concentration measurements:** separate statistics for identities, hosting, implementations, discovery, and funding.
5. **Usability and accessibility studies:** onboarding, recovery, device changes, and ordinary cross-domain interactions with representative users.
6. **Moderation evaluations:** abuse response and appeal quality without assuming a single universal community policy.
7. **Private-data experiments:** permission changes, offline replicas, revocation, and encrypted cross-service groups under explicit threat models.

The strongest sign of progress is not another protocol announcement. It is a useful service whose users can choose independent implementations and providers, whose operators can sustain it, and whose important relationships survive change.

## 22. Glossary and source guide

### 22.1 Terms

| Term | Meaning in this report |
|---|---|
| Actor | An addressable entity that performs or receives activities; not necessarily a human |
| AppView | An AT Protocol service interpreting records and serving application-level queries |
| CRDT | A data structure designed to merge concurrent changes consistently under stated assumptions |
| DID | Decentralized Identifier; its actual behavior depends on its DID method |
| E2EE | End-to-end encryption, with content keys held by the designated endpoints |
| Federation | Application communication across independently administered systems |
| Firehose | A stream of updates used to synchronize or index network data |
| Homeserver | A user's hosting service in Matrix |
| Instance | An operated installation of a federated application |
| Labeler | A service supplying attributable labels or classifications in the AT ecosystem |
| Lexicon | AT Protocol's schema system for records and APIs |
| MLS | Messaging Layer Security, an IETF group key-establishment protocol |
| NIP | Nostr Implementation Possibility |
| PDS | Personal Data Server in AT Protocol |
| Permissioned network | A network whose membership or access is governed by admission rules |
| Relay | An intermediary distributing data; its responsibilities vary by protocol |
| SFU | Selective forwarding unit used to route media streams in conferencing |
| XEP | XMPP Extension Protocol |

### 22.2 How to use the sources

The inline links are the report's references. They point directly to the relevant standards, documentation, or announcements rather than to search-result pages. They are not all equivalent evidence:

- **Standards records** establish formal status and normative scope. RFC Editor, IETF Datatracker, W3C, OpenID Foundation specifications, and XSF XEP pages are the primary places to check whether work is final, experimental, or still a draft.
- **Implementation documentation** establishes the behavior and limits a project documents. It should not be generalized automatically to every implementation of the same protocol.
- **Project announcements** establish what was released or proposed on a particular date. Roadmaps and governance-transition announcements do not establish completion.
- **Architectural assessment** explains implications and tradeoffs across those sources. It is explicitly qualitative and should be supplemented by deployment-specific evidence for a purchasing or operating decision.

Many linked pages are living documents. The date at the top of this report is the boundary of its claims; later documentation may describe changes not reflected here. Where available, dated specifications and versioned release notes provide the most reproducible checkpoints.
