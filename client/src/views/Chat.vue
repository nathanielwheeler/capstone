<template>
	<div class="chat">
		<div class="container">
			<div class="row">
				<h3 class="col-12">
					<b>{{chat.title}}</b>
					<button class="btn btn-primary mybutton mx-2" @click="subscribe(chat._id)">
						<b>Subscribe</b>
					</button>
				</h3>
				<div class="messageBox col-12 d-flex flex-column-reverse border" v-chat-scroll>
					<message v-for="message in messages" :messageProp="message" :key="message._id"></message>
				</div>
			</div>
			<messageInput class="m-3" />
			<character-select />
			<active-character-modal />
		</div>
	</div>
</template>


<script>
import message from "../components/Message";
import messageInput from "../components/MessageInput";
import CharacterSelect from "../components/CharacterSelect";
import activeCharacterModal from "../components/ActiveCharacterModal";

export default {
	name: "chat",
	mounted() {
		let chatId = this.$route.params.chatId;
		this.$store.dispatch("getChat", chatId);
		this.$store.dispatch("getMessages", chatId);
	},
	props: [],
	data() {
		return {};
	},
	computed: {
		chat() {
			return this.$store.state.currentChat;
		},
		messages() {
			return this.$store.state.messages[this.$route.params.chatId];
		}
		//   comments() {
		//   return this.$store.state.comments[this.taskProp._id] || [];
		// }
	},
	methods: {
		subscribe(chatId) {
			this.$store.dispatch("subscribe", chatId);
		}
	},
	components: {
		message,
		messageInput,
		CharacterSelect,
		activeCharacterModal
	}
};
</script>


<style scoped>
.mybutton {
	padding: 0px;
}

messageInput {
	text-align: center;
	z-index: -1;
}

.messageBox {
	height: 450px;
	overflow-y: auto;
	overflow-wrap: break-word;
	background: #fdf6e3;
	color: #657b83;
}

h3 {
	text-align: center;
	color: #000000;
	margin-top: 10px;
}

.chat {
	text-align: center;
}

.btn-margin {
	margin: 20px;
}
</style>