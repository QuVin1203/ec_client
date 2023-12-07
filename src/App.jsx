import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useSelector } from "react-redux"
import Layout from "./components/layouts/Layout"
import { Route, Routes } from "react-router-dom"
import SignInScreen from "./features/auth/SignInScreen"
import SignUpScreen from "./features/auth/SignUpScreen"
import HomeScreen from "./features/home/HomeScreen"
import GiftDetailScreen from "./features/gift/components/GiftDetailScreen"
import HistoryExchange from "./features/history/HistoryExchange"
import CreateGiftScreen from "./features/gift/components/CreateGiftScreen"
import UpdateGiftScreen from "./features/gift/components/UpdateGiftScreen"
import UserScreen from "./features/users/UserScreen"
import Protected from "./components/protected-route/Protected"



function App() {
  const queryClient = new QueryClient()
  const isLoggedIn = useSelector(state => state.auth.isLogin)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/gift/:id" element={<GiftDetailScreen />} />
            <Route path="/history" element={<HistoryExchange />} />
            <Route path="/gift/create" element={<CreateGiftScreen />} />
            <Route path="/gift/update/:id" element={<UpdateGiftScreen />} />
            <Route path="/users" element={<Protected isLoggedIn={isLoggedIn}><UserScreen /></Protected>} />
          </Route>
        </Routes>
      </QueryClientProvider>

    </>
  )
}

export default App
