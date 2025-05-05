import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMyFriends, getRecommendedUsers, sendFreindRequest, acceptFriendRequest, getFriendRequests, getOutgoingFriendReqs } from '../controllers/user.controller.js';
import { send } from 'vite';

const router = express.Router();

router.use(protectRoute);

router.get("/", protectRoute ,getRecommendedUsers);
router.get("/friends", protectRoute, getMyFriends);

router.post("/friend-request/:id", sendFreindRequest);

router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;