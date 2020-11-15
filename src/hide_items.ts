
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Hide Items
//===========================================================================
const Trig_Hide_Items_Conditions = (): boolean => {


	if ( ( ! ( GetTriggerPlayer() === udg_Host ) ) ) {

		return false;

	}


	if ( ( ! ( StringCase( GetEventPlayerChatString(), false ) === "-item" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Hide_Items_Func001Func001Func001C = (): boolean => {


	if ( ( ! ( IsItemHiddenBJ( GetEnumItem() ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Hide_Items_Func001Func001A = (): void => {


	if ( ( Trig_Hide_Items_Func001Func001Func001C() ) ) {

		SetItemVisibleBJ( true, GetEnumItem() )

	} else {

		SetItemVisibleBJ( false, GetEnumItem() )

	}


};


const Trig_Hide_Items_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 17;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		EnumItemsInRectBJ( udg_RoundRegion[ GetForLoopIndexA() ], Trig_Hide_Items_Func001Func001A )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Hide_Items = (): void => {

	gg_trg_Hide_Items = CreateTrigger();
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 0 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 1 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 2 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 3 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 4 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 5 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 6 ), "", true )
	TriggerRegisterPlayerChatEvent( gg_trg_Hide_Items, Player( 7 ), "", true )
	TriggerAddCondition( gg_trg_Hide_Items, Condition( Trig_Hide_Items_Conditions ) )
	TriggerAddAction( gg_trg_Hide_Items, Trig_Hide_Items_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Hide_Items();

} );
